# wii.hacks.guide

The complete guide to modding your Wii, vWii, and Wii mini.

https://wii.hacks.guide/

## Running the site locally

This requires the following installed on your system:
- ruby(-dev)
- bundler

To test the website locally, clone the source code:

```sh
git clone https://github.com/hacks-guide/Guide_Wii --recurse-submodules
cd Guide_Wii
```

Then simply run the following commands:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

The website should now be running on http://127.0.0.1:4000/.
