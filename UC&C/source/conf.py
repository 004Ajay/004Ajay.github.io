# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'UC&C'
copyright = 'Ajay, 2025'
author = 'Ajay'
release = '1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

# Extensions installed using pip, pip install sphinx-copybutton

extensions = [
    'sphinx_copybutton',
]

copybutton_exclude_patterns = ">>> |\$"

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# html_baseurl = "https://004Ajay.github.io/UC&C/build/html" 
html_theme = 'nature'
html_static_path = ['_static']
