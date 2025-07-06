"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: '0.0.0.0',
    port: 1337,
    app: {
        keys: env.array('APP_KEYS'),
    },
});
