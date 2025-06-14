---
slug: statement-to-insights-part2
title: "Converting Bank Statements to Insights: Automating Future Data Collection using Gmail Zapier and Google Sheets Part 2"
authors: [ajay]
tags: [python, automation]
---

Read on [Medium](https://medium.com/@ajaytshaju/converting-bank-statements-to-insights-automating-continuous-data-collection-and-building-a-c7e474f329b1)

Before starting Part 2, make sure you catch up on Part 1, where I share the groundwork for transforming raw bank statements — the data collection, Google Sheets and Llama LLM for data cleanup, failed attempts, and learning many valuable techniques — click to read Part 1!

<!-- truncate -->

![The overall process](The%20overall%20process.webp)
The overall process

## What’s in this part

    The Search for a fast way to Fill 940+ Dropdowns
    Making the Dashboard
    Automating Future Data Collection: The powerful integration between Gmail, Zapier, and Google Sheets
    What to do in the Future? Advantages & Disadvantages

### 1. The Search for a fast way to Fill 940+ Dropdowns

The first way is to fill each category by clicking and selecting one by one from a list of 70+ categories, but it would take a lot of time, maybe an average of 15 seconds(approx.) for each dropdown, considering, the entries in the Details column may not be correct; they may have dual meanings; the category may change with the type of transaction(credit/debit), then it would take 14,130 seconds, which is about 4 hours. This scrutiny of checking my transaction history from the UPI app or Bank Statements to choose the category is important if I need to do Machine Learning or Deep Learning tasks later, as they need quality data for better outputs.

![Dropdown selection-one by one](Dropdown%20selection-one%20by%20one.webp)
Dropdown selection-one by one

Since speed is important I had to look for another way to speed up the dropdown selection process, I thought why not use some spreadsheet formula to do this task — I found some formulas. Use IF() to find the key term(‘Petrol Pump’, ‘Ajay Bakers’ 😂) in the details column and put a suitable category(‘Scooter Petrol’, ‘Bakery’) and the formula looks like

`=IF(ISNUMBER(SEARCH("Petrol Pump", D2)), "Scooter Petrol", IF(ISNUMBER(SEARCH("Grocery Store", D2)), "Household", ""))`

See how this formula works

* =IF(ISNUMBER(SEARCH(“Petrol Pump”, D2)), “Scooter Petrol”, “”))

* =IF(ISNUMBER(1), “Scooter Petrol”, “”))

* =IF(TRUE, “Scooter Petrol”, “”))

* Value “Scooter Petrol” in the cell where this formula exists

_The ISNUMBER() returns TRUE if SEARCH() finds the specified keyword(here, ‘Petrol Pump’ or ‘Grocery Store’) allowing the IF() function to display the term if the condition is True. Else SEARCH() returns Error, ISNUMBER() will return FALSE, and IF() could handle the False case as specified._

This works but the problem with this approach is

1. Currently I have 70+ categories so the formula will become lengthy and complex with many nested IF cases.
2. The output of this formula is a text, not a chosen item from a dropdown, so if I need to change the entry in the future it would be not easy.

_The solution was to use Data Validation with VLOOKUP() in a Reference Table_

The reference table has two columns ‘Keyword’ and ‘Category’ having ‘Petrol Pump’ — ‘scooter petrol’, ‘Grocery Store’ — ’household’ respectively and the formula looks like

`=IFERROR(VLOOKUP(A2, ReferenceSheet!A:B, 2, FALSE), "")`

But this approach has some problems, they are

1. Every time the keyword won’t be ‘petrol pump’ or ‘XX Store’ but different words like ‘Diesel Pump’, ‘XY Store’, etc 😌, and the details entry won’t have a consistent letter-case, sometimes entry will be full capital letters or small letters, in other cases its a mix of small and capital letters.
2. (same as above)

Solving this is another nightmare with more complex tables and formulas like `=IFERROR(INDEX(Categories, MATCH(TRUE, ISNUMBER(SEARCH(LOWER(ReferenceSheet!D:D), LOWER(D2))),0)), "")`

As these formulas got overly complex I thought of going back to my previous idea of selecting each category one by one, after doing this for a while, due to the repetition, I switched to a lazy approach — Filling the categories ‘randomly’ rather than one by one.

![Dropdown selection-random](Dropdown%20selection-random.webp)
Dropdown selection-random

And laziness version 1.2 was copying a category and pasting it to similar items😌. With this approach, I can save somewhat 1 hour, but I got a spark quickly ⚡- that is to give a small change that could increase the speed twice and the idea is to use ‘Find’ to locate some key terms(for ex, ‘KL Pump’) in the details column and pasting the category copied before(‘Scooter Petrol’). This dropped the 15-second time to 6 seconds, if we do the math it is only 5,652 seconds ~ 1.5 hours as compared to 4 hours for one-by-one manual selection.

![Dropdown selection — copy-find-paste](Dropdown%20selection%20—%20copy-find-paste.webp)
Dropdown selection — copy-find-paste

Another problem is looking at the ocean-like data, cross-matching the details, and selecting the categories that lead to oozing out of energy, this would happen for most people. I tackled this problem by setting an egg-shaped Pomodoro timer right next to me, with each cycle spanning 25 minutes with a 5-minute break, and repeating the cycle 4–6 times to reach 2–3 hours of productive work. Besides this, I set up a visual cue(counter) to let me know the task is moving forward by showing me how many dropdowns are remaining, using the formula `=942-COUNTA(E2:E944)`,the output looks like Dropdown to be completed: 471.

### 2. Making the Dashboard

![View of My Minimal Dashboard](View%20of%20My%20Minimal%20Dashboard.webp)
View of My Minimal Dashboard

Before starting to build the dashboard I gave more details to my data such as adding the Main Category and Type(Income/Expense) using the XLOOKUP formula to match with the category name. The XLOOKUP formula used for putting Main Category using sub-category was `=XLOOKUP(E2, $O$2:$O$100,$P$2:$P$100)`

![XLOOKUP Formula](XLOOKUP%20Formula.webp)
XLOOKUP Formula

Building dashboards with three or four charts takes many steps when explained as text, if you like to learn more take a look at one of my other stories ([Step-by-Step Guide for Creating a Reading Habit Tracker in Google Sheets](https://medium.com/@ajaytshaju/step-by-step-guide-for-creating-a-reading-habit-tracker-in-google-sheets-96920411282f)) to see how I created charts with steps explained. Here in this project, I kept the Dashboard minimal similar to my other trackers. In this minimal dashboard what I like the most is the Pivot Tables, they give a bird eye view of my finances. I added ‘Category’ in Row, ‘Year’ in Column, ‘Month’ in Filters, and ‘Debit’ and ‘Credit’ in Values in two pivot tables(one for debit and the other for credit), which enabled me to see the transaction totals Year-wise and filter by Month.

### 3. Automating Future Data Collection: The Powerful Integration Between Gmail, Zapier, and Google Sheets

Whenever I send/receive some money, I get both a message and an email notification, which feels annoying. Surprisingly, this “distress” ended up being useful for automating future data collection!

Here’s how I approached it: I connected three applications — Gmail, Zapier, and Google Sheets — using Zapier as the link between Gmail and Google Sheets. Essentially, Zapier pulls emails matching a specific search term (like credit or debit notifications from Axis Bank), formats them using its built-in AI, and then adds a row to Google Sheets.

Now let’s understand the Zapier processes:

![Zapier Interface](Zapier%20Interface.webp)
Zapier Interface

Zapier has an amazing landing page, we can text Zapier AI what is out automation plan and within a few seconds it will give the partially initialized step-by-step automation process and we just need to click the ‘try it’ button to bring the AI-created automation steps to our automation editor. By the way, Zapier calls their automation ‘Zap’.

![Power of Zapier AI](Power%20of%20Zapier%20AI.webp)
Power of Zapier AI

When our Zap is in the editor we will have a Copiolt AI at our disposal with which we can ask our doubts, configure the steps, and many more!

![Zap Editor](Zap%20Editor.webp)
Zap Editor

Overall, setting up my automation took me only 10 minutes to connect the applications and test the functionalities. After your first Zap, the time to make the next will come down by 2–4min; it's that easy to use Zapier.

While your Zap is at work, you can see the logs on ‘Zap Runs’ by clicking on the icon placed left side of your Zap editor. When your Zap fails Zapier will notify you through email of the cause and what to do next. See one such email Zapier sent me when my Zap failed.

![Zapier alert email](Zapier%20alert%20email.webp)
Zapier alert email

When I checked the problem on my Zap editor I got to know the issue in detail — It was an error with the Google Sheets, it may be down for update, maintenance, or lack of resources.

![Zap failed to add sheet row](Zap%20failed%20to%20add%20sheet%20row.webp)
Zap failed to add sheet row

So far Zapier has automatically added 28 transactions to my Google Sheet, but it will bring only the Date, Details, and Credit/Debit amount, all the other columns should be filled by me — the only relief is that I need to extend the formula for all remaining columns after filling the Category column (I am taking this manual step as a review for my transactions).

![Data collected automatically using Zapier](Data%20collected%20automatically%20using%20Zapier.webp)
Data collected automatically using Zapier

Since Zapier reads and writes data from my accounts, naturally, privacy is a concern. Based on my research, Zapier uses bank-level AES-256 encryption and complies with various data protection frameworks. Additionally, it hosts data on AWS servers in the U.S., including personal data and data processed on behalf of customers. You can find more details about Zapier’s encryption and security policies here: https://zapier.com/legal/data-privacy.

## A problem with Zapier

Since I don’t want to spend any money on this project, one issue I’m currently facing is the expiration of the professional trial of Zapier, which only lasts for 14 days. After this trial, my account will revert to the free version, and as per their free account policies, it does not allow multi-step Zaps. Unfortunately, my automation requires three steps: retrieving data from Gmail, transforming the data using Zapier AI, and loading it into a new row in the spreadsheet. These steps are essential for the process to work correctly. If you have any ideas to replace the automation step or any other trustworthy platforms that offer this kind of automation, please feel free to share in the comments.

### 4. What to do in the Future?

1. I have to check the data in fixed intervals to correct any errors that may happen to Zapier while copying the data from Gmail, as the mail is not coming in a suitable format to be uploaded to a spreadsheet directly. In addition to filling the columns which were not filled by Zapier.

2. I have to analyze the data by selecting some values on slicers and filters to get insights or even downloading and uploading the data to a SQL Database/Python to query it on more complex constraints to answer questions like ‘What was my total expense on clothing and personal care for the last two months of recent years? Is there any trend of buying certain items?’ etc.

Insights I get from these visualizations

* **Insight:** Total money spent on monthly mobile recharge is equal to doing yearly plan. **New decision:** Can think of yearly mobile recharge. **Priorities:** Switching to another service(ex, BSNL)

* **Insight:** Total money spent on groceries in a month shows that bulk buying from a wholesale store is cheaper. **New Decision:** Can consider buying groceries in bulk. **Priorities:** Need more storage space and potential chances of food spoilage.

* **Insight:** The electricity bill trend is going up over time. New **Decision:** Upgrading to energy-efficient appliances or installing Solar Panels. **Priorities:** Balancing with needs and wants, impact on overall finances.

Now let's go through the advantages & disadvantages of this project

## Advantages

* Reduced Manual Data Entry: Automation minimizes manual input, saving time and reducing data entry errors.

* Real-Time Data Updates: The dashboard updates instantly with every transaction email, keeping my financial records up-to-date.

* Scalable and Adaptable: The system efficiently handles increasing transactions with minimal manual effort. Compared to the insights and control it provides, the manual tasks I have to perform are minor.

* Centralized Financial Tracking: Google Sheets offers a single view of my transaction history, balances, and spending habits. I can access it conveniently from any device with internet access, allowing me to manage my finances on the go.

* Customizable Dashboard: I can modify the dashboard layout and charts to suit my personal tracking preferences.

* Cost-Effective: Using free or low-cost tools like Gmail, Zapier, and Google Sheets makes the system affordable. I can also link multiple bank accounts without significant added cost. For higher data volume and multiple accounts, ‘Google Apps Script’ can improve writing speed and formatting.

* Enhanced Financial Awareness: Regular tracking helps me understand spending patterns and improve budgeting over time. Simple pivot charts of past transactions have supported decisions, like opting for yearly mobile recharges, reallocating funds to different categories, and controlling spending in some areas.

## Disadvantages

* Manual Updates/Not fully automated: When Zapier inputs data, it doesn’t categorize transactions automatically, split dates into months and years, or calculate the balance. I need to update these manually using the TEXT formula and extend the other formulas to new rows.

* Dependency on Email Notifications: The system relies on timely transaction emails, which can cause errors if emails are delayed or missed.

* Zapier Costs: Currently, my transaction count fits within Zapier’s free version, but if it grows, I may need to either reduce transactions or switch to a paid plan.

* Limited Scope: This system is designed for simple transactions, but if we need to expand it to track other financial data like investments, credit scores, and net worth it would add complexity.

## Failure points of my system

* It depends on my bank’s email notification, if my bank’s mailing service is down then the transaction won’t be added to my tracker, as missed emails won’t be sent again when the system comes online.

* Failure/downtime in the mediator service(Zapier in my case) would cause some transactions to be not added.

* _In short: if I add more apps or services, their downtimes and failures will affect this tracker._

* If I make a hand-to-hand money transfer, for example: I give Rs.60 to my nephew for buying 2 packets of milk; there is no Gmail or bank involved directly, so I need to account for it manually.

Now you may have some suggestions, kindly post them in the comments. There is a lot to be corrected in this, for example — if you know how to work with HTML and CSS, then delete the div container codes and render a webpage full of credit and debit info without any dividing boxes and just copy the data directly from the webpage and apply some regular expression to remove unwanted information(from [Part 1](http://www.medium.com/@ajaytshaju/converting-bank-statements-to-insights-using-google-sheets-for-data-transformation-and-cleanup-58259d102108)) would be much better than chewing the raw HTML CSS codes. I may return with another blog in the future by solving the current processes(maybe the app that solves my current issues might be under the work of a thinker like you). With that said, Thank you for reading 🎉.