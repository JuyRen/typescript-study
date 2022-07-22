// 开启 exactOptionalPropertyTypes 后， 可选属性不能被赋予undefined

interface UserDefaults {
  colorThemeOverride?: "dark" | "light";
}

const users_1: UserDefaults = {
  colorThemeOverride: undefined,
};

const users_2: UserDefaults = {};
