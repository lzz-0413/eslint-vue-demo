import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
    // 基础 JS 推荐规则
    js.configs.recommended,

    // Vue3 推荐规则
    ...pluginVue.configs['flat/recommended'],

    // Prettier 关闭与格式化冲突的规则（放最后）
    prettierConfig,

    {
        languageOptions: {
            globals: {
                ...globals.browser,  // window, document, navigator 等全部放开
                ...globals.es2021,   // Promise, Map, Set 等 ES 新特性
            },
        }
    },
    {
        rules: {
            // ---- 代码质量（标准级） ----
            'no-console': 'warn',           // console.log 给警告
            'no-debugger': 'error',         // debugger 报错
            'eqeqeq': ['error', 'always'],  // 必须用 ===
            'no-unused-vars': 'error',      // 未使用变量报错
            'no-var': 'error',              // 禁止 var
            'prefer-const': 'error',        // 优先用 const

            // ---- Vue 规则调整 ----
            'vue/multi-word-component-names': 'off', // 关闭组件必须多单词限制
            'vue/no-unused-vars': 'error',
        },
    },

    {
        // 忽略不需要检查的目录
        ignores: ['dist/**', 'node_modules/**', 'public/**'],
    },
]