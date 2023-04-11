
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const MANPATH: string;
	export const LDFLAGS: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_dependencies_wundergraph: string;
	export const NODE: string;
	export const npm_package_dependencies__wundergraph_svelte_query: string;
	export const _P9K_TTY: string;
	export const TURBO_INVOCATION_DIR: string;
	export const NVM_CD_FLAGS: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_typescript: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_dependencies__tanstack_svelte_query: string;
	export const npm_package_devDependencies_vite: string;
	export const TMPDIR: string;
	export const PWDEBUG: string;
	export const HOMEBREW_REPOSITORY: string;
	export const CPPFLAGS: string;
	export const npm_package__schema: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const WINDOWID: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_registry: string;
	export const PNPM_HOME: string;
	export const GIT_EDITOR: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const PRETTIERD_LOCAL_PRETTIER_ONLY: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const PUPPETEER_EXECUTABLE_PATH: string;
	export const SSH_AUTH_SOCK: string;
	export const FZF_BASE: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const AWS_PROFILE: string;
	export const npm_package_devDependencies_svelte: string;
	export const PRETTIERD_DEFAULT_CONFIG: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PATH: string;
	export const NVM_SYMLINK_CURRENT: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const npm_config_auto_install_peers: string;
	export const PWD: string;
	export const npm_command: string;
	export const JAVA_HOME: string;
	export const npm_package_scripts_preview: string;
	export const P9K_SSH: string;
	export const KITTY_PID: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const P9K_TTY: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const TURBO_HASH: string;
	export const XPC_FLAGS: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const SHLVL: string;
	export const PYENV_SHELL: string;
	export const HOME: string;
	export const npm_package_type: string;
	export const TERMINFO: string;
	export const HOMEBREW_PREFIX: string;
	export const LOGNAME: string;
	export const npm_package_scripts_format: string;
	export const npm_lifecycle_script: string;
	export const PKG_CONFIG_PATH: string;
	export const NVM_BIN: string;
	export const BUN_INSTALL: string;
	export const KITTY_WINDOW_ID: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_package_devDependencies__types_node: string;
	export const _P9K_SSH_TTY: string;
	export const npm_package_dependencies__wundergraph_sdk: string;
	export const npm_package_scripts_check: string;
	export const KITTY_PUBLIC_KEY: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		MANPATH: string;
		LDFLAGS: string;
		npm_package_devDependencies_prettier: string;
		npm_package_dependencies_wundergraph: string;
		NODE: string;
		npm_package_dependencies__wundergraph_svelte_query: string;
		_P9K_TTY: string;
		TURBO_INVOCATION_DIR: string;
		NVM_CD_FLAGS: string;
		INIT_CWD: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_typescript: string;
		TERM: string;
		SHELL: string;
		npm_package_dependencies__tanstack_svelte_query: string;
		npm_package_devDependencies_vite: string;
		TMPDIR: string;
		PWDEBUG: string;
		HOMEBREW_REPOSITORY: string;
		CPPFLAGS: string;
		npm_package__schema: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		WINDOWID: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_registry: string;
		PNPM_HOME: string;
		GIT_EDITOR: string;
		USER: string;
		NVM_DIR: string;
		PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		PRETTIERD_LOCAL_PRETTIER_ONLY: string;
		PNPM_SCRIPT_SRC_DIR: string;
		PUPPETEER_EXECUTABLE_PATH: string;
		SSH_AUTH_SOCK: string;
		FZF_BASE: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		AWS_PROFILE: string;
		npm_package_devDependencies_svelte: string;
		PRETTIERD_DEFAULT_CONFIG: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PATH: string;
		NVM_SYMLINK_CURRENT: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		npm_config_auto_install_peers: string;
		PWD: string;
		npm_command: string;
		JAVA_HOME: string;
		npm_package_scripts_preview: string;
		P9K_SSH: string;
		KITTY_PID: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		P9K_TTY: string;
		LANG: string;
		npm_package_name: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		TURBO_HASH: string;
		XPC_FLAGS: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte_check: string;
		SHLVL: string;
		PYENV_SHELL: string;
		HOME: string;
		npm_package_type: string;
		TERMINFO: string;
		HOMEBREW_PREFIX: string;
		LOGNAME: string;
		npm_package_scripts_format: string;
		npm_lifecycle_script: string;
		PKG_CONFIG_PATH: string;
		NVM_BIN: string;
		BUN_INSTALL: string;
		KITTY_WINDOW_ID: string;
		KITTY_INSTALLATION_DIR: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_package_devDependencies__types_node: string;
		_P9K_SSH_TTY: string;
		npm_package_dependencies__wundergraph_sdk: string;
		npm_package_scripts_check: string;
		KITTY_PUBLIC_KEY: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
