
```shell
yarn create next-app --typescript
mkdir src
mv pages src/pages
mv styles src/styles
```

```shell
rm -y .eslintrc.json
yarn create @eslint/config

# 対話形式で色々尋ねられるので次のように選んでいく
# yarn create v1.22.19
# [1/4] 🔍  Resolving packages...
# [2/4] 🚚  Fetching packages...
# [3/4] 🔗  Linking dependencies...
# warning "create-frontend > ts-loader@6.2.2" has unmet peer dependency "typescript@*".
# warning "create-frontend > @typescript-eslint/eslint-plugin > tsutils@3.21.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
# [4/4] 🔨  Building fresh packages...
# success Installed "@eslint/create-config@0.3.1" with binaries:
#       - create-config
# ✔ How would you like to use ESLint? · style
# ✔ What type of modules does your project use? · esm
# ✔ Which framework does your project use? · react
# ✔ Does your project use TypeScript? · No / Yes
# ✔ Where does your code run? · browser
# ✔ How would you like to define a style for your project? · prompt
# ✔ What format do you want your config file to be in? · JavaScript
# ✔ What style of indentation do you use? · 4
# ✔ What quotes do you use for strings? · single
# ✔ What line endings do you use? · unix
# ✔ Do you require semicolons? · No / Yes
# The config that you've selected requires the following dependencies:
# 
# eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
# ✔ Would you like to install them now? · No / Yes
# ✔ Which package manager do you want to use? · yarn
```

