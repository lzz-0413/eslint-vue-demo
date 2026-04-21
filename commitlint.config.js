export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // type 枚举
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'perf', 'ci'],
        ],
        'type-case': [2, 'always', 'lower-case'],
        'subject-empty': [2, 'never'],
        'subject-max-length': [2, 'always', 72],
    },
}