---
slug: data-driven-car-buying
title: "Data-Driven Car Buying: How I Analyzed the Best Options Using Python"
authors: [ajay]
tags: [data, python]
---

Read on [Medium](https://medium.com/@ajaytshaju/data-driven-car-buying-how-i-analyzed-the-best-options-using-python-3e3a15c5f8eb)

![Car Data Analysis to find best car for my needs](Car%20Data%20Analysis%20to%20find%20best%20car%20for%20my%20needs,%20(Image%20by%20Author,%20Python%20Logo%20from%20Wikipedia).webp)
Car Data Analysis to find best car for my needs, (Image by Author, Python Logo from Wikipedia)

## The backstory

Since the start of 2024, there has been a discussion in my home regarding purchasing a new car, but the talks and planning have gone on without a final decision. But when my current car started costing a good amount just from routine checkups and other services, the talk rose again to full power. Just like every time, it was my responsibility to find the latest and best car based on some constraints, but this time I thought of analyzing an Indian Cars dataset (get the data [here](https://www.kaggle.com/datasets/atharvataras/indian-car-market-2024?select=india_cars_2024.csv)) using Python rather than searching on Google and filtering through websites.

<!-- truncate -->

**The first question in your mind: Why did he choose Python Analysis over applying some Filters on Car Websites?**

The Google search and filtering functions on car websites like CarDekho or CarWale are much easier but I choose Python:

* Most importantly, by engaging with the dataset directly, I was able to customize my search parameters in a way that web filters might not allow. I could explore a wider range of variables, perform complex comparisons, and apply unique criteria to my specific needs.

* I aimed for a more hands-on, analytical approach to enhance my understanding of data analysis with Python and Excel. As well as finding something extra(maybe a new car that I didn’t find initially) through this analysis, where the probability is slim in the usual web searches.

* And, if the decision is not finalized, when more data arrives I can use the updated data and run through this notebook again to find the next best car for my needs. Sometimes a reader like you can make use of my [Python Notebook](https://github.com/004Ajay/Data-Analysis/blob/main/Car%20EDA%20Python/car_selection.ipynb) for your specific car-searching needs as well.

## Let’s Jump onto the work

See a snapshot of the data in MS Excel 2019:

![A bird-eye view of the data](A%20bird-eye%20view%20of%20the%20data%20(Image%20by%20Author).webp)
A bird-eye view of the data (Image by Author)

***Some information***: The coding and structure of the blog remain consistent throughout. I used the [Pandas](https://pandas.pydata.org/docs/index.html) library in IPython in VS Code to perform this Exploratory Data Analysis(EDA). I followed four steps for this analysis, they are Loading and Viewing the data; Removing unnecessary columns and rows; Comparison with my current car, Honda Amaze 2015.

First of all, we need to bring the data to IPython VS Code, for that use the pandas function `read_csv()`

```python
import pandas as pd
cars = pd.read_csv('india_cars_2024.csv', encoding='utf-8')
```

But here comes the first problem

![The first error in Pandas](The%20first%20error%20in%20Pandas%20(Image%20by%20Author).webp)
The first error in Pandas (Image by Author)

Just change the encoding to unicode_escape, found from here

```python
import pandas as pd
cars = pd.read_csv('india_cars_2024.csv', encoding='unicode_escape')
```

Output:

![View of Data in Pandas](View%20of%20Data%20in%20Pandas%20(Image%20by%20Author).webp)
View of Data in Pandas (Image by Author)

While viewing the data, I peeked at the dimensionality, which includes 1,663 rows and 57 columns. Many of these columns and rows were not relevant to my analysis, so I decided to make the dataset lean for faster processing and better absorption of info.

I then viewed the dataset's columns using the `dataset.columns` attribute.

Then to check for null values in each column, I used `dataset.isnull().sum().sort_values(ascending=False)`, which gave me an idea about null values in the DataFrame. Sorted it in descending order, allowing me to identify columns with no entries(if any).

```python
print(cars.columns)

cars.isnull().sum().sort_values(ascending=False).head()

# Index(['brand_parent', 'model_parent', 'variant_parent', 'variant_name',
#       'price', 'displacement', 'power', 'transmission', 'mileage', 'fuel',
#       'engine_typr', 'cylinders', 'valves_per_cyl', 'gearbox', 'drive',
#       'fuel_cap', 'emission_norm', 'suspension_front', 'suspension_rear',
#       'steer_type', 'steer_col', 'turn_radius', 'brake_front', 'breake_rear',
#       'length', 'width', 'height', 'boot_cap', 'seat_cap', 'ground_cl',
#       'wheelbase', 'kerb_weight', 'gross_weight', 'doors', 'park_sensors',
#       'upholstery', 'radio_antenna', 'tyre_size', 'tyre_type', 'wheel_size',
#       'airbags', 'screen_size', 'connectivity', 'image-src', 'ncap_rating',
#       'ev_range', 'ev_battery_cap', 'ev_motor', 'ev_charge', 'ev_drag_coeff',
#       'zero_to_hundred', 'speakers', 'auto_park', 'ev_charge_time_dc',
#       'ev_charge_time_ac', 'ev_brake_regen_levels', 'ev_norm'],
#       dtype='object')
```

## Removing Unwanted Columns

Next, I removed unwanted columns to slim down the dataset. This is important because removing columns reduces the dataset’s dimensions, thus enabling faster data processing. Before removing these columns, I explored all 57 columns using specific functions (`<column>.unique()`, `<column>.isnull()`) to check their contents, identify missing values, and find unique values. Some constraints I had were that I do not prefer Electric or CNG vehicles, as electric vehicles could increase electricity charges(homes without Solar Panels) and CNG vehicles typically have lower boot space, acceleration performance, horsepower, resale value, and high maintenance costs. In order to remove the ‘Electric’ columns I wrote code to find columns starting with ‘ev’ (which stands for Electric Vehicle) and identified about nine such columns and dropped them.

```python
ev_cols = [column for column in cars if column.startswith('ev')]

print(ev_cols)

# Output: ['ev_range',
# 'ev_battery_cap',
# 'ev_motor',
# 'ev_charge',
# 'ev_drag_coeff',
# 'ev_charge_time_dc',
# 'ev_charge_time_ac',
# 'ev_brake_regen_levels',
# 'ev_norm']

cars.drop(ev_cols, axis=1, inplace=True) # axis=1 means columns
```

While exploring the dataset, I noticed some columns contained irrelevant information, such as “radio antenna,” also identified other columns having redundant info, like “brand_parent,” “model_parent,” “variant_parent,” and “variant_name.” The “variant_name” contained information from the other three columns, so I removed them. Similar to this, there exist many other columns that provide useful information, but I removed them as I would later look for relevant details when analyzing the final car list.

When I reviewed the dataset, I encountered a significant issue with the dataset: the presence of SI units alongside the values(row entries). For example, in the mileage column, a car might have a mileage of “19 km per liter,” which is not suitable for integer-level comparisons. Thus, I needed to change the entries from  `<value><SI unit>` to just `value` and convert it to an integer, and rename the column as `<column name>_<SI unit>`.

I updated several such columns, including mileage, gross weight, displacement, fuel capacity, boot capacity, length, width, height, and ground clearance, filled empty or NA values with 0, and changed the data type to integer. To extract the numbers, I used a regular expression `r'\d+'`, to find integers within the strings. And dropped the original columns to avoid redundancy. Codes:

```python
cars['gross_weight_kg'] = cars['gross_weight'] \
                                      .str.extract(r'(\d+)') \
                                      .fillna(0) \
                                      .astype(int) 

cars['mileage_kmpl'] = cars['mileage'] \
                                      .str.extract(r'(\d+)') \
                                      .fillna(0) \
                                      .astype(int)
# Output:
#        mileage_kmpl
#          12
#          17
```

```python
to_drop_cols = ['mileage', 'gross_weight', 'displacement',
                'fuel_cap', 'boot_cap', 'length', 'width',
                'height', 'ground_cl']

cars.drop(to_drop_cols, axis=1, inplace=True)
```

## Removing Unwanted Rows

In the next step, I removed unwanted rows from the dataset. I began by removing cars with fuel types “Electric” and “CNG” using a filtering function.

```python
cars = cars[~cars['fuel'].isin(['Electric', 'CNG'])]
```

Next, I needed to address the price column, which presented another challenge. The prices were listed in crores or lakhs, multiplied by “on-road price” and “ex-showroom price,” with the only delimiter being an asterisk (*). To resolve this, I used the `split('*')` function to separate these values with an asterisk as a delimiter and extracted the first entry, representing the price value.

```python
# Before: 'Rs.8.07 Lakh*Get On-Road Price*Ex-showroom Price'
# After: 'Rs.8.07 Lakh' 

cars['price'] = cars['price'].apply(lambda x: str(x).split('*')[0])

cars['price'].head()

# Output
#    Rs.68.90 Lakh
#    Rs.68.25 Lakh
#       Rs.1.01 Cr
#       Rs.6.95 Cr
#      Rs.10.48 Cr
```

After cleaning the price data, I found that the price column entries included the string “Cr” (for crores) in various cases. To filter out these entries, I used the `str.contains()` method with `case=False`, which allowed me to remove approximately 211 rows containing crore-priced cars.

```python
crore_priced_cars = cars['price'].str.contains('cr', case=False, na=False)
```

Next, I need to identify two keywords, "Rs." and "Lakh," in the price column, these followed a pattern (Rs.9.9 Lakh). So I removed those words, converted the remaining values to a float, renamed the new column as ‘price_lakhs’, and finally dropped the original price column using a series of steps.

```python
pattern = r"rs.|(\s\w+)" # using regex pattern to find multiple strings,
                         # 'rs.' is a word with fullstop,
                         # '\s' finds any whitespace character
                         # '\w+' a complete word that follows

# Changing 'Rs.62.95 Lakh' like values to 62.95 (float) 
lakh_priced_cars = cars['price'].str \
                               .lower() \
                               .replace(pattern, "", regex=True) \
                               .astype(float) 

cars['price_lakhs'] = lakh_priced_cars # Adding new column 'price_lakhs'

cars.drop('price', axis=1, inplace=True) # Dropping the 'price' column
```

## Comparison with Current Car

This is the most important part of my car-finding process. When planning to buy a new vehicle, we all hope to upgrade from our existing one. This is the same in my case too, find a better car than my 2015 Honda Amaze.

One significant consideration is the narrow path to my home, which limits the size of vehicles that can be accommodated. The largest car that can fit is the 2024 Maruti Suzuki Brezza, with dimensions of 3,995 mm in length, 1,790 mm in width, and 1,685 mm in height. Considering these dimensions, I set a criterion that any car less than or equal to these measurements would be acceptable.

Additionally, the Amaze has an engine displacement of 1.2 liters, so any car with an engine displacement greater than or equal to this is acceptable. The price range I set was between 8 to 10 lakhs. Furthermore, I required the mileage to be greater than 12 kmpl. I also added the boot capacity requirement; although the Amaze has a boot capacity of 400 liters, I decided to accept cars with a minimum boot capacity of 300 liters. Finally, I combined these criteria and filtered the dataset accordingly.

```python
# Conditions combined to filter out rows

cars = cars[
    (cars['price_lakhs'] >= 8.00)     &

    (cars['price_lakhs'] <= 10.00)    & 

    (cars['mileage_kmpl'] >= 12)      &
    
    (cars['length_mm'] <= 3995)       &
    
    (cars['width_mm'] <= 1790)        &
    
    (cars['height_mm'] <= 1685)       &

    (cars['boot_cap_liters'] >= 308)
]
```

After applying these combined conditions, the DataFrame has a dimension of 112 rows and 24 columns. Then to see the shortlisted cars, one of the columns titled ‘variant_name’ has been extracted, but in that column, I found multiple entries for a car like ‘Citroen C3 Shine Dual Tone Turbo’, ‘Citroen C3 Feel Dual Tone Turbo’, ‘Nissan Magnite Turbo XV Premium Opt’, ‘Nissan Magnite Turbo XV Premium DT’. So I did a set of operations to find the unique ones.

```python
print("Final Cars: ", cars['variant_name'] \
                             .apply(lambda x: ' '.join(x.split()[:2])) \
                             .unique()
)

# Output:
# Final Cars: ['Citroen C3' 'Nissan Magnite' 'Renault Kiger' 'Honda Amaze'
#           'Hyundai i20' 'Hyundai Aura' 'Hyundai Exter' 'Hyundai Venue'
#           'Toyota Taisor' 'Tata Tigor' 'Tata Altroz' 'Tata Punch'
#           'Maruti Dzire' 'Maruti Baleno' 'Maruti FRONX' 'Maruti Brezza']
```

This resulted in a total of 16 distinct cars. Now I can show this car list to my stakeholders, and they as well as I can proceed to the examination of each of these cars, looking into service charges, aftermarket costs, modifications, and other criteria.

Finally, I exported the required data as a CSV file for later use.

See the complete Notebook and other materials [here on my GitHub](https://github.com/004Ajay/Data-Analysis/tree/main/Car%20EDA%20Python).

That’s all about 'Data-Driven Car Buying Using Python', if you liked the post please clap and share to support my work. Thanks 😃