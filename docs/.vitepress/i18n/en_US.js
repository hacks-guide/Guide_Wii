import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["donations"], link: `/donations` },
		{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.pages["get-started"], link: `/get-started` },
		{ text: localeData.pages["faq"], link: `/faq` }
	],
	sidebar: {
		[`/bluebomb`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/bluebomb` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
		[`/bootmii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/cios-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/cios-vwii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/cios`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/hbc-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/hbc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/flashhax`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["flashhax"], link: `/flashhax` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/letterbomb`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["letterbomb"], link: `/letterbomb` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/osc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/priiloader`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
		[`/recommended-homebrew`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/str2hax`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["str2hax"], link: `/str2hax` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/vwii-finalizing-setup`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/vwii-homebrew-channel-no-wiiu-mods`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/vwii-homebrew-channel`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["vwii-homebrew-channel"], link: `/vwii-homebrew-channel` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/wiiconnect24`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/wiiu-nand-dumper`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/wiiu-nand-dumper` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/wilbrand`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		[`/wnd-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["wiimmfi"], link: `/wiimmfi` }
				]
			},
			sidebar_common
		],
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2024 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["donations"], link: `/donations` },
			{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
			{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
		]
	}
};

export default {
	lang: "en",
	label: localeData.language,
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
