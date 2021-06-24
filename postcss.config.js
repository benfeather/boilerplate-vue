const autoprefixer = require('autoprefixer')
const purgeCSS = require('@fullhuman/postcss-purgecss')

const isProd = process.env.NODE_ENV === 'production'
const plugins = []

if (isProd) {
	plugins.push(
		purgeCSS({
			content: [`index.html`, `./src/**/*.vue`],
			defaultExtractor(content) {
				content = content.replace(/<style[^]+?<\/style>/gi, '') // remove <style> blocks from vue components
				return content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
			},
			whitelist: [],
			whitelistPatterns: [
				/-(leave|enter|appear)(|-(to|from|active))$/,
				/^(?!(|.*?:)cursor-move).+-move$/,
				/^router-link(|-exact)-active$/,
			],
		})
	)

	plugins.push(autoprefixer())
}

module.exports = {
	plugins,
}
