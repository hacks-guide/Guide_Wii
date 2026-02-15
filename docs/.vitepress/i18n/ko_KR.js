import { ko_KR as localeData } from './strings'

const locale = "ko_KR";

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["donations"], link: `/${locale}/donations` },
		{ text: localeData.pages["privacy-policy"], link: `/${locale}/privacy-policy` },
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
		{ text: localeData.pages["site-navigation"], link: `/${locale}/site-navigation` },
		{ text: localeData.pages["faq"], link: `/${locale}/faq` },
		{
			text: localeData.extras,
			items: [
				{ text: localeData.pages["priiloader-usage"], link: `/${locale}/priiloader-usage` },
				{ text: localeData.pages["dump-games"], link: `/${locale}/dump-games` },
				{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
				{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` },
			]
		}
	],
	sidebar: {
		[`/${locale}/bluebomb`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/${locale}/bluebomb` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
		[`/${locale}/bootmii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/bootmiirecover`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["bootmiirecover"], link: `/${locale}/bootmiirecover` },
				]
			},
			sidebar_common
		],
		[`/${locale}/bricks`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["bricks"], link: `/${locale}/bricks` },
				]
			},
			sidebar_common
		],
		[`/${locale}/cios-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/${locale}/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/${locale}/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/${locale}/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/${locale}/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/cios-vwii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/${locale}/wiiu-nand-dumper` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/${locale}/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/${locale}/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/cios`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/dump-games`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["dump-games"], link: `/${locale}/dump-games` },
				]
			},
			sidebar_common
		],
		[`/${locale}/dump-wads`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["dump-wads"], link: `/${locale}/dump-wads` },
				]
			},
			sidebar_common
		],
		[`/${locale}/hackmii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["hackmii"], link: `/${locale}/hackmii` },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/hbc-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/${locale}/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/${locale}/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/${locale}/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/${locale}/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/hbc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/homebrew-dolphin`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["homebrew-dolphin"], link: `/${locale}/homebrew-dolphin` },
				]
			},
			sidebar_common
		],
		[`/${locale}/flashhax`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["flashhax"], link: `/${locale}/flashhax` },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/gcsaves`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["gcsaves"], link: `/${locale}/gcsaves` },
				]
			},
			sidebar_common
		],
		[`/${locale}/gc-backups`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["gc-backups"], link: `/${locale}/gc-backups` },
				]
			},
			sidebar_common
		],
		[`/${locale}/key-information`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
				]
			},
			sidebar_common
		],
		[`/${locale}/legacy-exploits`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["legacy-exploits"], link: `/${locale}/legacy-exploits` },
				]
			},
			sidebar_common
		],
		[`/${locale}/letterbomb`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["letterbomb"], link: `/${locale}/letterbomb` },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/modmii`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["modmii"], link: `/${locale}/modmii` },
				]
			},
			sidebar_common
		],
		[`/${locale}/osc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/priiloader`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
		[`/${locale}/priiloader-usage`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["priiloader-usage"], link: `/${locale}/priiloader-usage` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
		[`/${locale}/recommended-homebrew`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/recovery-mode`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["recovery-mode"], link: `/${locale}/recovery-mode` },
				]
			},
			sidebar_common
		],
		[`/${locale}/str2hax`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["str2hax"], link: `/${locale}/str2hax` },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/syscheck`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["syscheck"], link: `/${locale}/syscheck` },
				]
			},
			sidebar_common
		],
		[`/${locale}/themes`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["themes"], link: `/${locale}/themes` },
				]
			},
			sidebar_common
		],
		[`/${locale}/update`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["update"], link: `/${locale}/update` },
				]
			},
			sidebar_common
		],
		[`/${locale}/vwii-finalizing-setup`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/${locale}/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/${locale}/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/${locale}/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/${locale}/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/vwii-homebrew-channel-no-wiiu-mods`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/${locale}/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/${locale}/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/${locale}/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/${locale}/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/vwii-homebrew-channel`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["vwii-homebrew-channel"], link: `/${locale}/vwii-homebrew-channel` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/${locale}/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/${locale}/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/wiiconnect24`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/wiigsc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wiigsc"], link: `/${locale}/wiigsc` },
				]
			},
			sidebar_common
		],
		[`/${locale}/nintendowfc`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/wii-backups`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wii-backups"], link: `/${locale}/wii-backups` },
				]
			},
			sidebar_common
		],
		[`/${locale}/wii-loaders`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wii-loaders"], link: `/${locale}/wii-loaders` },
				]
			},
			sidebar_common
		],
		[`/${locale}/wii-factory-reset`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wii-factory-reset"], link: `/${locale}/wii-factory-reset` },
				]
			},
			sidebar_common
		],
		[`/${locale}/wiiu-nand-dumper`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wiiu-nand-dumper"], link: `/${locale}/wiiu-nand-dumper` },
					{ text: localeData.pages["vwii-homebrew-channel-no-wiiu-mods"], link: `/${locale}/vwii-homebrew-channel-no-wiiu-mods` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-vwii"], link: `/${locale}/cios-vwii` },
					{ text: localeData.pages["vwii-finalizing-setup"], link: `/${locale}/vwii-finalizing-setup` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/wilbrand`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["wilbrand"], link: `/${locale}/wilbrand` },
					{ text: localeData.pages["hbc"], link: `/${locale}/hbc` },
					{ text: localeData.pages["bootmii"], link: `/${locale}/bootmii` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios"], link: `/${locale}/cios` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/wnd-mini`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["bluebomb" ], link: `/${locale}/bluebomb` },
					{ text: localeData.pages["hbc-mini"], link: `/${locale}/hbc-mini` },
					{ text: localeData.pages["priiloader"], link: `/${locale}/priiloader` },
					{ text: localeData.pages["cios-mini"], link: `/${locale}/cios-mini` },
					{ text: localeData.pages["wnd-mini"], link: `/${locale}/wnd-mini` },
					{ text: localeData.pages["osc"], link: `/${locale}/osc` },
					{ text: localeData.pages["recommended-homebrew"], link: `/${locale}/recommended-homebrew` },
					{ text: localeData.pages["wiiconnect24"], link: `/${locale}/wiiconnect24` },
					{ text: localeData.pages["nintendowfc"], link: `/${locale}/nintendowfc` }
				]
			},
			sidebar_common
		],
		[`/${locale}/yawmme`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["yawmme"], link: `/${locale}/yawmme` },
				]
			},
			sidebar_common
		],
		/*
		 	The `/${locale}/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/${locale}/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2025 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["donations"], link: `/${locale}/donations` },
			{ text: localeData.pages["privacy-policy"], link: `/${locale}/privacy-policy` },
			{ text: localeData.pages["site-navigation"], link: `/${locale}/site-navigation` }
		]
	}
};

export default {
	lang: "ko",
	label: "🇰🇷 한국어",
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
