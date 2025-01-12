import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["donations"], link: `/donations` },
		{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
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
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` },
		{ text: localeData.pages["faq"], link: `/faq` },
		{
			text: localeData.extras,
			items: [
				{ text: localeData.pages["priiloader-usage"], link: `/priiloader-usage` },
				{ text: localeData.pages["dump-games"], link: `/dump-games` },
				{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
				{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` },
			]
		}
	],
	sidebar: {
		[`/bluebomb`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
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
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/bootmiirecover`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bootmiirecover"], link: `/bootmiirecover` },
				]
			},
			sidebar_common
		],
		[`/bricks`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bricks"], link: `/bricks` },
				]
			},
			sidebar_common
		],
		[`/cios-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/cios-vwii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/wiiu-nand-dumper` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/cios`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/dump-games`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["dump-games"], link: `/dump-games` },
				]
			},
			sidebar_common
		],
		[`/dump-wads`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["dump-wads"], link: `/dump-wads` },
				]
			},
			sidebar_common
		],
		[`/hackmii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["hackmii"], link: `/hackmii` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/hbc-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/hbc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/homebrew-dolphin`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["homebrew-dolphin"], link: `/homebrew-dolphin` },
				]
			},
			sidebar_common
		],
		[`/flashhax`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["flashhax"], link: `/flashhax` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/gcsaves`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["gcsaves"], link: `/gcsaves` },
				]
			},
			sidebar_common
		],
		[`/gc-backups`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["gc-backups"], link: `/gc-backups` },
				]
			},
			sidebar_common
		],
		[`/key-information`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
				]
			},
			sidebar_common
		],
		[`/legacy-exploits`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["legacy-exploits"], link: `/legacy-exploits` },
				]
			},
			sidebar_common
		],
		[`/letterbomb`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["letterbomb"], link: `/letterbomb` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/modmii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["modmii"], link: `/modmii` },
				]
			},
			sidebar_common
		],
		[`/osc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/priiloader`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
		[`/priiloader-usage`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["priiloader-usage"], link: `/priiloader-usage` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
		[`/recommended-homebrew`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/recovery-mode`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["recovery-mode"], link: `/recovery-mode` },
				]
			},
			sidebar_common
		],
		[`/str2hax`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["str2hax"], link: `/str2hax` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/syscheck`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["syscheck"], link: `/syscheck` },
				]
			},
			sidebar_common
		],
		[`/themes`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["themes"], link: `/themes` },
				]
			},
			sidebar_common
		],
		[`/update`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["update"], link: `/update` },
				]
			},
			sidebar_common
		],
		[`/vwii-finalizing-setup`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/vwii-homebrew-channel-no-wiiu-mods`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/vwii-homebrew-channel`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["vwii-homebrew-channel"], link: `/vwii-homebrew-channel` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/wiiconnect24`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/wiigsc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiigsc"], link: `/wiigsc` },
				]
			},
			sidebar_common
		],
		[`/nintendowfc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/wii-backups`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wii-backups"], link: `/wii-backups` },
				]
			},
			sidebar_common
		],
		[`/wii-loaders`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wii-loaders"], link: `/wii-loaders` },
				]
			},
			sidebar_common
		],
		[`/wii-factory-reset`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wii-factory-reset"], link: `/wii-factory-reset` },
				]
			},
			sidebar_common
		],
		[`/wiiu-nand-dumper`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/wilbrand`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["wilbrand"], link: `/wilbrand` },
					{ text: localeData.pages["hbc"], link: `/hbc` },
					{ text: localeData.pages["bootmii"], link: `/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios"], link: `/cios` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/wnd-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/yawmme`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["yawmme"], link: `/yawmme` },
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
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2025 Nintendo Homebrew',
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
