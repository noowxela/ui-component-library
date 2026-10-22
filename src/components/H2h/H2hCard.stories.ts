import type { Meta, StoryObj } from '@storybook/react';

import H2hCard from './H2hCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof H2hCard>  = {
    title: 'Example/H2hCard',
    component: H2hCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;


const exampleFootballH2hdata = 
{
    "_id": "65dd32477163d904b21f7f0a",
    "future": {
        "away": [
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "zp5rzgh5x1eyq82",
            "match_status": "Not started",
            "match_time": 1709330400,
            "team_away": {
            "_id": "63b67e9554f7855d274be2ae",
            "league_ranking": "23",
            "logo": "https://img.thesports.com/football/team/73eb62698518ab54028aee31105931ae.png",
            "name": "Central Cordoba SDE",
            "name_zh": "科尔多瓦中央",
            "short_name": "CA Central Cordoba SDE"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "4wyrn4hxv912q86",
            "match_status": "Not started",
            "match_time": 1709856900,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d9cb",
            "league_ranking": "8",
            "logo": "https://img.thesports.com/football/team/845eed665066a19144dad9f96e550b50.png",
            "name": "Club Atlético Newell's Old Boys",
            "name_zh": "纽维尔老男孩",
            "short_name": "CA Newell's Old Boys"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "965mkyhynzxer1g",
            "match_status": "Not started",
            "match_time": 1710194400,
            "team_away": {
            "_id": "63b678a154f7855d274488bc",
            "league_ranking": "5",
            "logo": "https://img.thesports.com/football/team/caff6f729db9dc68b1938f6533b0fa14.png",
            "name": "Lanus",
            "name_zh": "拉努斯",
            "short_name": "Lanus"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "l7oqdehol1kor51",
            "match_status": "Not started",
            "match_time": 1710702000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbc8",
            "league_ranking": "1",
            "logo": "https://img.thesports.com/football/team/37869351904578ff964a25ce93b800fd.png",
            "name": "Godoy Cruz Antonio Tomba",
            "name_zh": "戈多伊克鲁斯",
            "short_name": "Godoy Cruz Antonio Tomba"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "ednm9wh7gey6ryo",
            "match_status": "Not started",
            "match_time": 1711915200,
            "team_away": {
            "_id": "63b6786054f7855d2743dbcc",
            "league_ranking": "19",
            "logo": "https://img.thesports.com/football/team/f24c6d2696f439d43875fba52100991d.png",
            "name": "Belgrano",
            "name_zh": "贝尔格拉诺",
            "short_name": "Belgrano"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "jw2r09h2w1ygrz8",
            "match_status": "Not started",
            "match_time": 1712520000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            },
            "team_home": {
            "_id": "63b67bc654f7855d27480866",
            "league_ranking": "21",
            "logo": "https://img.thesports.com/football/team/df9d41a492e324ad411a3e39c7935352.png",
            "name": "CA Platense",
            "name_zh": "普拉滕斯",
            "short_name": "CA Platense"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "318q66hwjkewqo9",
            "match_status": "Not started",
            "match_time": 1713124800,
            "team_away": {
            "_id": "63b67a9f54f7855d2746b12a",
            "league_ranking": "17",
            "logo": "https://img.thesports.com/football/team/c5d75265caa6875d9ea84f36027312d5.png",
            "name": "Club Atlético Unión",
            "name_zh": "圣塔菲联",
            "short_name": "Union Santa Fe"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "x7lm7phz9p1km2w",
            "match_status": "Not started",
            "match_time": 1715544000,
            "team_away": {
            "_id": "63b6786154f7855d2743e646",
            "league_ranking": "2",
            "logo": "https://img.thesports.com/football/team/815c22bf4ba2ec7ac989fe89c0dd6ecc.png",
            "name": "Estudiantes La Plata",
            "name_zh": "拉普拉塔大学生",
            "short_name": "Estudiantes La Plata"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "dn1m1gh281wlmoe",
            "match_status": "Not started",
            "match_time": 1716148800,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            },
            "team_home": {
            "_id": "63b6786254f7855d2743f01d",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/football/team/925e9365900b159acf4493eb401fdc18.png",
            "name": "Rosario Central",
            "name_zh": "罗萨里奥中央",
            "short_name": "CA Rosario Central"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "zp5rzgh5x1nxq82",
            "match_status": "Not started",
            "match_time": 1716753600,
            "team_away": {
            "_id": "63b6785f54f7855d2743d9e8",
            "league_ranking": "4",
            "logo": "https://img.thesports.com/football/team/cb3c7e99e401d3ff83eeb36c53996d79.png",
            "name": "Racing Club de Avellaneda",
            "name_zh": "竞技",
            "short_name": "Racing Club"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "short_name": "Club Atletico Tigre"
            }
        }
        ],
        "home": [
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "jw2r09h2w1g6rz8",
            "match_status": "Not started",
            "match_time": 1709416800,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            },
            "team_home": {
            "_id": "63b67c8354f7855d27493996",
            "league_ranking": "26",
            "logo": "https://img.thesports.com/football/team/2d87cf3b426597f02435e2c72e8def93.png",
            "name": "Atletico Tucuman",
            "name_zh": "图库曼竞技",
            "short_name": "Atletico Tucuman"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "2y8m4zh6z1dvql0",
            "match_status": "Not started",
            "match_time": 1709685000,
            "team_away": {
            "_id": "63b6786254f7855d2743f01d",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/football/team/925e9365900b159acf4493eb401fdc18.png",
            "name": "Rosario Central",
            "name_zh": "罗萨里奥中央",
            "short_name": "CA Rosario Central"
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "8yomo4h30zj8q0j",
            "match_status": "Not started",
            "match_time": 1710202500,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743e155",
            "league_ranking": "24",
            "logo": "https://img.thesports.com/football/team/e142922645466d58b5ad3a27570b5ac5.png",
            "name": "Banfield",
            "name_zh": "班菲尔德",
            "short_name": "CA Banfield"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "3glrw7h7zo55qdy",
            "match_status": "Not started",
            "match_time": 1710635400,
            "team_away": {
            "_id": "63b6790f54f7855d2744fb09",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/football/team/a01279fdf6589b3c11529ca1ab4201fc.png",
            "name": "Instituto de Córdoba",
            "name_zh": "科尔多瓦学院",
            "short_name": "Instituto"
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "4jwq2ghe71y0m0v",
            "match_status": "Not started",
            "match_time": 1711915200,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            },
            "team_home": {
            "_id": "63b67ad954f7855d2746f42f",
            "league_ranking": "10",
            "logo": "https://img.thesports.com/football/team/44cb6b8a76b2194e16849eace4743e54.png",
            "name": "Talleres Cordoba",
            "name_zh": "塔勒瑞斯",
            "short_name": "Talleres Cordoba"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "pxwrxlh5zv86ryk",
            "match_status": "Not started",
            "match_time": 1712520000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbb4",
            "league_ranking": "9",
            "logo": "https://img.thesports.com/football/team/5d8f8c8c289dbb2d67203988c8275cbc.png",
            "name": "Argentinos Juniors",
            "name_zh": "阿根廷青年人",
            "short_name": "Argentinos Juniors"
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "4jwq2ghe7120m0v",
            "match_status": "Not started",
            "match_time": 1713124800,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            },
            "team_home": {
            "_id": "63b67bc854f7855d27481459",
            "league_ranking": "",
            "logo": "https://img.thesports.com/football/team/5183f8cdb38f7cb0bb24f2c9a7eda619.png",
            "name": "Independiente Rivadavia",
            "name_zh": "门多萨独立",
            "short_name": "Independiente Rivadavia"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "l7oqdehol1pzr51",
            "match_status": "Not started",
            "match_time": 1715544000,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbc0",
            "league_ranking": "15",
            "logo": "https://img.thesports.com/football/team/f323884c2481d25aa4b316a43583b733.png",
            "name": "Gimnasia La Plata",
            "name_zh": "拉普拉塔体操",
            "short_name": "Gimnasia La Plata"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "jw2r09h2w1ogrz8",
            "match_status": "Not started",
            "match_time": 1716148800,
            "team_away": {
            "_id": "63b6785f54f7855d2743d9cb",
            "league_ranking": "8",
            "logo": "https://img.thesports.com/football/team/845eed665066a19144dad9f96e550b50.png",
            "name": "Club Atlético Newell's Old Boys",
            "name_zh": "纽维尔老男孩",
            "short_name": "CA Newell's Old Boys"
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            }
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "x7lm7phz9plkm2w",
            "match_status": "Not started",
            "match_time": 1716753600,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "short_name": "Velez Sarsfield"
            },
            "team_home": {
            "_id": "63b6786154f7855d2743eadc",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/football/team/47174721b260fae6e833329c13c9f2ee.png",
            "name": "CA Independiente",
            "name_zh": "阿根廷独立",
            "short_name": "CA Independiente"
            }
        }
        ]
    },
    "goal_distribution": {
        "away": {
        "all": {
            "conceded": [
            [
                1,
                12,
                1,
                15
            ],
            [
                4,
                50,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                3,
                37,
                76,
                90
            ]
            ],
            "matches": 5,
            "scored": [
            [
                0,
                0,
                1,
                15
            ],
            [
                0,
                0,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                0,
                0,
                76,
                90
            ]
            ]
        },
        "away": {
            "conceded": [
            [
                1,
                20,
                1,
                15
            ],
            [
                2,
                40,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                2,
                40,
                76,
                90
            ]
            ],
            "matches": 3,
            "scored": [
            [
                0,
                0,
                1,
                15
            ],
            [
                0,
                0,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                0,
                0,
                76,
                90
            ]
            ]
        },
        "home": {
            "conceded": [
            [
                0,
                0,
                1,
                15
            ],
            [
                2,
                66,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                1,
                33,
                76,
                90
            ]
            ],
            "matches": 2,
            "scored": [
            [
                0,
                0,
                1,
                15
            ],
            [
                0,
                0,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                0,
                0,
                76,
                90
            ]
            ]
        }
        },
        "home": {
        "all": {
            "conceded": [
            [
                1,
                14,
                1,
                15
            ],
            [
                2,
                28,
                16,
                30
            ],
            [
                2,
                28,
                31,
                45
            ],
            [
                2,
                28,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                0,
                0,
                76,
                90
            ]
            ],
            "matches": 5,
            "scored": [
            [
                1,
                14,
                1,
                15
            ],
            [
                0,
                0,
                16,
                30
            ],
            [
                1,
                14,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                1,
                14,
                61,
                75
            ],
            [
                4,
                57,
                76,
                90
            ]
            ]
        },
        "away": {
            "conceded": [
            [
                1,
                16,
                1,
                15
            ],
            [
                2,
                33,
                16,
                30
            ],
            [
                2,
                33,
                31,
                45
            ],
            [
                1,
                16,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                0,
                0,
                76,
                90
            ]
            ],
            "matches": 2,
            "scored": [
            [
                0,
                0,
                1,
                15
            ],
            [
                0,
                0,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                1,
                50,
                61,
                75
            ],
            [
                1,
                50,
                76,
                90
            ]
            ]
        },
        "home": {
            "conceded": [
            [
                0,
                0,
                1,
                15
            ],
            [
                0,
                0,
                16,
                30
            ],
            [
                0,
                0,
                31,
                45
            ],
            [
                1,
                100,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                0,
                0,
                76,
                90
            ]
            ],
            "matches": 3,
            "scored": [
            [
                1,
                20,
                1,
                15
            ],
            [
                0,
                0,
                16,
                30
            ],
            [
                1,
                20,
                31,
                45
            ],
            [
                0,
                0,
                46,
                60
            ],
            [
                0,
                0,
                61,
                75
            ],
            [
                3,
                60,
                76,
                90
            ]
            ]
        }
        }
    },
    "history": {
        "away_history": [
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "3glrw7h7zo95qdy",
            "match_status": "End",
            "match_time": 1708200000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 2,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 4,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6789f54f7855d27447dd5",
            "corners": 4,
            "ht_score": 1,
            "league_ranking": "22",
            "logo": "https://img.thesports.com/football/team/65d05eaf7edc601ae236107417b01cbf.png",
            "name": "San Lorenzo",
            "name_zh": "圣洛伦索",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "CA San Lorenzo",
            "yellow_card": 0,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "k82rekhw31e1rep",
            "match_status": "End",
            "match_time": 1707940800,
            "team_away": {
            "_id": "63b6786054f7855d2743e450",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "11",
            "logo": "https://img.thesports.com/football/team/49a35dd00c51fc958ebf44054bce4c48.png",
            "name": "Defensa Y Justicia",
            "name_zh": "国防与司法",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Defensa Y Justicia",
            "yellow_card": 1,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 4,
            "ht_score": 0,
            "league_ranking": "28",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 1,
            "hl": 1
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "2y8m4zh6z1vxql0",
            "match_status": "End",
            "match_time": 1707516000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 2,
            "ht_score": 0,
            "league_ranking": "26",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 4,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786154f7855d2743e646",
            "corners": 8,
            "ht_score": 1,
            "league_ranking": "5",
            "logo": "https://img.thesports.com/football/team/815c22bf4ba2ec7ac989fe89c0dd6ecc.png",
            "name": "Estudiantes La Plata",
            "name_zh": "拉普拉塔大学生",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Estudiantes La Plata",
            "yellow_card": 4,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "318q66hwjk80qo9",
            "match_status": "End",
            "match_time": 1707173100,
            "team_away": {
            "_id": "63b6785f54f7855d2743d954",
            "corners": 3,
            "ht_score": 2,
            "league_ranking": "18",
            "logo": "https://img.thesports.com/football/team/9ed2c4f6adc51975cdbd2a93093e6a43.png",
            "name": "Boca Juniors",
            "name_zh": "博卡青年",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Boca Juniors",
            "yellow_card": 3,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 2,
            "ht_score": 0,
            "league_ranking": "25",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 1
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2024",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "2y8m4zh6z15xql0",
            "match_status": "End",
            "match_time": 1706742000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 1,
            "ht_score": 0,
            "league_ranking": "17",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 0,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d9e8",
            "corners": 4,
            "ht_score": 2,
            "league_ranking": "24",
            "logo": "https://img.thesports.com/football/team/cb3c7e99e401d3ff83eeb36c53996d79.png",
            "name": "Racing Club de Avellaneda",
            "name_zh": "竞技",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Racing Club",
            "yellow_card": 1,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2024",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "ednm9wh7ge7jryo",
            "match_status": "End",
            "match_time": 1706220000,
            "team_away": {
            "_id": "63b6786054f7855d2743e468",
            "corners": 7,
            "ht_score": 0,
            "league_ranking": "22",
            "logo": "https://img.thesports.com/football/team/173f9983cdfd064d8bdd1a341e1bd8e4.png",
            "name": "Sarmiento Junin",
            "name_zh": "萨米恩托",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "CA Sarmiento",
            "yellow_card": 4,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 8,
            "ht_score": 0,
            "league_ranking": "27",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 0,
            "hl": 1
            },
            "wdl": 0
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2023",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "8yomo4h377x0q0j",
            "match_status": "End",
            "match_time": 1700946000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 1,
            "ht_score": 0,
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 1,
            "hl": 1
            },
            "team_home": {
            "_id": "63b67a9f54f7855d2746b12a",
            "corners": 4,
            "ht_score": 1,
            "league_ranking": "20",
            "logo": "https://img.thesports.com/football/team/c5d75265caa6875d9ea84f36027312d5.png",
            "name": "Club Atlético Unión",
            "name_zh": "圣塔菲联",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Union Santa Fe",
            "yellow_card": 1,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2023",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "1l4rjnh4662gm7v",
            "match_status": "End",
            "match_time": 1699818300,
            "team_away": {
            "_id": "63b67bc654f7855d27480866",
            "corners": 2,
            "ht_score": 0,
            "league_ranking": "6",
            "logo": "https://img.thesports.com/football/team/df9d41a492e324ad411a3e39c7935352.png",
            "name": "CA Platense",
            "name_zh": "普拉滕斯",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 1,
            "short_name": "CA Platense",
            "yellow_card": 1,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 4,
            "ht_score": 1,
            "league_ranking": "13",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 2,
            "hl": 1
            },
            "wdl": 0
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2023",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "jw2r09h2ll7lrz8",
            "match_status": "End",
            "match_time": 1699315200,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 4,
            "ht_score": 1,
            "league_ranking": "14",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 2,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbcc",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "3",
            "logo": "https://img.thesports.com/football/team/f24c6d2696f439d43875fba52100991d.png",
            "name": "Belgrano",
            "name_zh": "贝尔格拉诺",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Belgrano",
            "yellow_card": 1,
            "hl": 0
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2023",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "y0or5jhnll0zqwz",
            "match_status": "End",
            "match_time": 1698789600,
            "team_away": {
            "_id": "63b6786054f7855d2743dbc8",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "2",
            "logo": "https://img.thesports.com/football/team/37869351904578ff964a25ce93b800fd.png",
            "name": "Godoy Cruz Antonio Tomba",
            "name_zh": "戈多伊克鲁斯",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Godoy Cruz Antonio Tomba",
            "yellow_card": 4,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 3,
            "ht_score": 1,
            "league_ranking": "14",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 1,
            "hl": 1
            },
            "wdl": 1
        }
        ],
        "home_history": [
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c24c",
            "logo": "https://img.thesports.com/football/competition/d8fd96705da596e5bcd51ae7c4482156.png",
            "name": "Copa Argentina",
            "name_zh": "阿根廷杯",
            "season": "2024",
            "short_name": "Copa Argentina"
            },
            "match_id": "ednm9wh7do0oryo",
            "match_status": "End",
            "match_time": 1708560600,
            "team_away": {
            "_id": "63b67c4054f7855d2748bd93",
            "corners": 9,
            "ht_score": 0,
            "league_ranking": "",
            "logo": "https://img.thesports.com/football/team/ea0481a92fff56526485bfed8358a972.png",
            "name": "Sportivo Las Parejas",
            "name_zh": "拉斯帕雷加斯体育",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Sportivo Las Parejas",
            "yellow_card": 4,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 6,
            "ht_score": 1,
            "league_ranking": "13",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "x7lm7phz9pv6m2w",
            "match_status": "End",
            "match_time": 1708286400,
            "team_away": {
            "_id": "63b67b4f54f7855d27477613",
            "corners": 4,
            "ht_score": 0,
            "league_ranking": "21",
            "logo": "https://img.thesports.com/football/team/3de7fff92c61b2ac93b08814386cf85d.png",
            "name": "CA Huracan",
            "name_zh": "飓风队",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "CA Huracan",
            "yellow_card": 3,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 7,
            "ht_score": 0,
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "x7lm7phz9px6m2w",
            "match_status": "End",
            "match_time": 1708027200,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 4,
            "ht_score": 0,
            "league_ranking": "19",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
            },
            "team_home": {
            "_id": "63b67de454f7855d274af528",
            "corners": 7,
            "ht_score": 1,
            "league_ranking": "",
            "logo": "https://img.thesports.com/football/team/b9eb3a2ccc44b65d7bd365ad417ddb04.png",
            "name": "Deportivo Riestra",
            "name_zh": "利斯特雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Deportivo Riestra",
            "yellow_card": 4,
            "hl": 0
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "y0or5jhng19wqwz",
            "match_status": "End",
            "match_time": 1707524100,
            "team_away": {
            "_id": "63b6786054f7855d2743dbc0",
            "corners": 5,
            "ht_score": 0,
            "league_ranking": "10",
            "logo": "https://img.thesports.com/football/team/f323884c2481d25aa4b316a43583b733.png",
            "name": "Gimnasia La Plata",
            "name_zh": "拉普拉塔体操",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 1,
            "short_name": "Gimnasia La Plata",
            "yellow_card": 5,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 5,
            "ht_score": 1,
            "league_ranking": "27",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2024",
            "short_name": "ARG Division 1"
            },
            "match_id": "ednm9wh7gewjryo",
            "match_status": "End",
            "match_time": 1707084900,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 8,
            "ht_score": 0,
            "league_ranking": "19",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786254f7855d2743f561",
            "corners": 7,
            "ht_score": 4,
            "league_ranking": "9",
            "logo": "https://img.thesports.com/football/team/c7aa5e458bdcad0051f6786ff93c48ed.png",
            "name": "River Plate",
            "name_zh": "河床",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 5,
            "short_name": "River Plate",
            "yellow_card": 1,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2024",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "pxwrxlh5zvy5ryk",
            "match_status": "End",
            "match_time": 1706661000,
            "team_away": {
            "_id": "63b6786154f7855d2743eadc",
            "corners": 3,
            "ht_score": 1,
            "league_ranking": "8",
            "logo": "https://img.thesports.com/football/team/47174721b260fae6e833329c13c9f2ee.png",
            "name": "CA Independiente",
            "name_zh": "阿根廷独立",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "CA Independiente",
            "yellow_card": 1,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 8,
            "ht_score": 0,
            "league_ranking": "11",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 0,
            "hl": 1
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2024",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "6ypq3nh3l137md7",
            "match_status": "End",
            "match_time": 1706302800,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 8,
            "ht_score": 1,
            "league_ranking": "15",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "team_home": {
            "_id": "63b67da754f7855d274aa690",
            "corners": 2,
            "ht_score": 1,
            "league_ranking": "27",
            "logo": "https://img.thesports.com/football/team/b8ff3b78b8ff52dbca3b7eb27fb1c1fb.png",
            "name": "Barracas Central",
            "name_zh": "巴拉卡斯中央",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "CA Barracas Central",
            "yellow_card": 2,
            "hl": 0
            },
            "wdl": 0
        },
        {
            "competition": {
            "_id": "63b6785b54f7855d2743b371",
            "logo": "https://img.thesports.com/football/competition/2440249cd19586c39de8e05d55cc6b0d.png",
            "name": "International Club Friendly",
            "name_zh": "球会友谊赛",
            "season": "2024",
            "short_name": "INT CF"
            },
            "match_id": "dj2ryoh1nw71q1z",
            "match_status": "End",
            "match_time": 1705530600,
            "team_away": {
            "_id": "63b6786054f7855d2743dbcc",
            "corners": 5,
            "ht_score": 0,
            "league_ranking": "5",
            "logo": "https://img.thesports.com/football/team/f24c6d2696f439d43875fba52100991d.png",
            "name": "Belgrano",
            "name_zh": "贝尔格拉诺",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Belgrano",
            "yellow_card": 1,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 1,
            "ht_score": 1,
            "league_ranking": "23",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785b54f7855d2743b371",
            "logo": "https://img.thesports.com/football/competition/2440249cd19586c39de8e05d55cc6b0d.png",
            "name": "International Club Friendly",
            "name_zh": "球会友谊赛",
            "season": "2024",
            "short_name": "INT CF"
            },
            "match_id": "x7lm7phz9yl3m2w",
            "match_status": "End",
            "match_time": 1705265100,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 3,
            "ht_score": 2,
            "league_ranking": "23",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 4,
            "short_name": "Velez Sarsfield",
            "yellow_card": 0,
            "hl": 1
            },
            "team_home": {
            "_id": "63b678d254f7855d2744a6e4",
            "corners": 5,
            "ht_score": 1,
            "league_ranking": "10",
            "logo": "https://img.thesports.com/football/team/3a7e98528429448c23d759a25d5b5964.png",
            "name": "CA River Plate Montevideo",
            "name_zh": "乌拉圭河床",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "River Plate Montevideo",
            "yellow_card": 2,
            "hl": 0
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785b54f7855d2743b371",
            "logo": "https://img.thesports.com/football/competition/2440249cd19586c39de8e05d55cc6b0d.png",
            "name": "International Club Friendly",
            "name_zh": "球会友谊赛",
            "season": "2024",
            "short_name": "INT CF"
            },
            "match_id": "2y8m4zh6zy1vql0",
            "match_status": "End",
            "match_time": 1705017600,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 9,
            "ht_score": 0,
            "league_ranking": "23",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
            },
            "team_home": {
            "_id": "63b67a2454f7855d2745f204",
            "corners": 3,
            "ht_score": 1,
            "league_ranking": "14",
            "logo": "https://img.thesports.com/football/team/327368d0bd89e670a231bf92bb790675.png",
            "name": "Cerro Montevideo",
            "name_zh": "塞路",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Cerro Montevideo",
            "yellow_card": 2,
            "hl": 0
            },
            "wdl": -1
        }
        ],
        "vs_history": [
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2023",
            "short_name": "ARG Division 1"
            },
            "match_id": "318q66h68pelqo9",
            "match_status": "End",
            "match_time": 1687464000,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 6,
            "ht_score": 0,
            "league_ranking": "25",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Velez Sarsfield",
            "yellow_card": 0,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 5,
            "ht_score": 0,
            "league_ranking": "20",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 1,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2022",
            "short_name": "ARG Division 1"
            },
            "match_id": "3glrw7h36wzvqdy",
            "match_status": "End",
            "match_time": 1663516800,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 0,
            "ht_score": 0,
            "league_ranking": "26",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 4,
            "ht_score": 2,
            "league_ranking": "18",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2018-2019",
            "short_name": "ARG Division 1"
            },
            "match_id": "2y8m4zh47j36ql0",
            "match_status": "End",
            "match_time": 1551738000,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 2,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 10,
            "ht_score": 1,
            "league_ranking": "6",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2017-2018",
            "short_name": "ARG Division 1"
            },
            "match_id": "l5ergphpxyx3r8k",
            "match_status": "End",
            "match_time": 1503698700,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 1,
            "ht_score": 0,
            "league_ranking": "19",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Velez Sarsfield",
            "yellow_card": 4,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 8,
            "ht_score": 0,
            "league_ranking": "24",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2016-2017",
            "short_name": "ARG Division 1"
            },
            "match_id": "l7oqdeh129g6r51",
            "match_status": "End",
            "match_time": 1496509200,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 5,
            "ht_score": 1,
            "league_ranking": "22",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "25",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 4,
            "hl": 0
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2016-2017",
            "short_name": "ARG Division 1"
            },
            "match_id": "4wyrn4h925w4q86",
            "match_status": "End",
            "match_time": 1494893700,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 1,
            "ht_score": 1,
            "league_ranking": "25",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 5,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 14,
            "ht_score": 1,
            "league_ranking": "23",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Velez Sarsfield",
            "yellow_card": 0,
            "hl": 1
            },
            "wdl": 1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2015",
            "short_name": "ARG Division 1"
            },
            "match_id": "dn1m1gh4zz5xmoe",
            "match_status": "End",
            "match_time": 1442104200,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 5,
            "ht_score": 0,
            "league_ranking": "21",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 5,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 1,
            "ht_score": 1,
            "league_ranking": "10",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 1,
            "hl": 0
            },
            "wdl": -1
        },
        {
            "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2015",
            "short_name": "ARG Division 1"
            },
            "match_id": "2y8m4zh399eeql0",
            "match_status": "End",
            "match_time": 1436832600,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 2,
            "ht_score": 0,
            "league_ranking": "8",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 6,
            "ht_score": 0,
            "league_ranking": "18",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
            },
            "wdl": 0
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2023",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "x7lm7phzkk99m2w",
            "match_status": "End",
            "match_time": 1696028400,
            "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 1,
            "ht_score": 0,
            "league_ranking": "9",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 4,
            "hl": 1
            },
            "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 10,
            "ht_score": 0,
            "league_ranking": "13",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
            },
            "wdl": 0
        },
        {
            "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2022",
            "short_name": "Copa de la Liga Profesional"
            },
            "match_id": "y0or5jhz4z0nqwz",
            "match_status": "End",
            "match_time": 1651345200,
            "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 4,
            "ht_score": 1,
            "league_ranking": "3",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 2,
            "hl": 0
            },
            "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 2,
            "ht_score": 3,
            "league_ranking": "11",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
            },
            "wdl": 1
        }
        ],
        "vs_history_statistic": {
        "win": 4,
        "loss": 4,
        "draw": 2,
        "goal_rate": "1.5 - 1.4"
        },
        "home_history_statistic": {
        "win": 6,
        "loss": 3,
        "draw": 1,
        "goal_rate": "1.4 - 1.2"
        },
        "away_history_statistic": {
        "win": 2,
        "loss": 6,
        "draw": 2,
        "goal_rate": "0.5 - 1.2"
        }
    },
    "id": "l5ergphwnp78r8k",
    "match_info": {
        "competition": {
        "_id": "63b6785c54f7855d2743c215",
        "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
        "name": "Argentine Division 1",
        "name_zh": "阿根廷甲级联赛",
        "season": "2024",
        "short_name": "ARG Division 1"
        },
        "match_id": "l5ergphwnp78r8k",
        "match_kickoff_time": 0,
        "match_status": "First half",
        "match_time": 1708993800,
        "team_away": {
        "_id": "63b6786054f7855d2743dbd5",
        "league_ranking": "28",
        "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
        "name": "Club Atletico Tigre",
        "name_zh": "堤格雷",
        "short_name": "Club Atletico Tigre"
        },
        "team_home": {
        "_id": "63b6785f54f7855d2743d8f5",
        "league_ranking": "16",
        "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
        "name": "Velez Sarsfield",
        "name_zh": "萨斯菲尔德",
        "short_name": "Velez Sarsfield"
        }
    },
    "sports": "football"
}

const exampleFootballMap =
[
    {
      "competition": {
        "_id": "63b6785c54f7855d2743c215",
        "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
        "name": "Argentine Division 1",
        "name_zh": "阿根廷甲级联赛",
        "season": "2023",
        "short_name": "ARG Division 1"
      },
      "matches": [
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2023",
            "short_name": "ARG Division 1"
          },
          "match_id": "318q66h68pelqo9",
          "match_status": "End",
          "match_time": 1687464000,
          "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 6,
            "ht_score": 0,
            "league_ranking": "25",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Velez Sarsfield",
            "yellow_card": 0,
            "hl": 1
          },
          "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 5,
            "ht_score": 0,
            "league_ranking": "20",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 1,
            "hl": 0
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2022",
            "short_name": "ARG Division 1"
          },
          "match_id": "3glrw7h36wzvqdy",
          "match_status": "End",
          "match_time": 1663516800,
          "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 0,
            "ht_score": 0,
            "league_ranking": "26",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
          },
          "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 4,
            "ht_score": 2,
            "league_ranking": "18",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2018-2019",
            "short_name": "ARG Division 1"
          },
          "match_id": "2y8m4zh47j36ql0",
          "match_status": "End",
          "match_time": 1551738000,
          "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "16",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 2,
            "hl": 0
          },
          "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 10,
            "ht_score": 1,
            "league_ranking": "6",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2017-2018",
            "short_name": "ARG Division 1"
          },
          "match_id": "l5ergphpxyx3r8k",
          "match_status": "End",
          "match_time": 1503698700,
          "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 1,
            "ht_score": 0,
            "league_ranking": "19",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Velez Sarsfield",
            "yellow_card": 4,
            "hl": 1
          },
          "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 8,
            "ht_score": 0,
            "league_ranking": "24",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2016-2017",
            "short_name": "ARG Division 1"
          },
          "match_id": "l7oqdeh129g6r51",
          "match_status": "End",
          "match_time": 1496509200,
          "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 5,
            "ht_score": 1,
            "league_ranking": "22",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
          },
          "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 3,
            "ht_score": 0,
            "league_ranking": "25",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 4,
            "hl": 0
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2016-2017",
            "short_name": "ARG Division 1"
          },
          "match_id": "4wyrn4h925w4q86",
          "match_status": "End",
          "match_time": 1494893700,
          "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 1,
            "ht_score": 1,
            "league_ranking": "25",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 1,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 5,
            "hl": 0
          },
          "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 14,
            "ht_score": 1,
            "league_ranking": "23",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Velez Sarsfield",
            "yellow_card": 0,
            "hl": 1
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2015",
            "short_name": "ARG Division 1"
          },
          "match_id": "dn1m1gh4zz5xmoe",
          "match_status": "End",
          "match_time": 1442104200,
          "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 5,
            "ht_score": 0,
            "league_ranking": "21",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 5,
            "hl": 1
          },
          "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 1,
            "ht_score": 1,
            "league_ranking": "10",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 1,
            "hl": 0
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6785c54f7855d2743c215",
            "logo": "https://img.thesports.com/football/competition/19bc08fd59288a5811c21c814dfd9c2a.png",
            "name": "Argentine Division 1",
            "name_zh": "阿根廷甲级联赛",
            "season": "2015",
            "short_name": "ARG Division 1"
          },
          "match_id": "2y8m4zh399eeql0",
          "match_status": "End",
          "match_time": 1436832600,
          "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 2,
            "ht_score": 0,
            "league_ranking": "8",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
          },
          "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 6,
            "ht_score": 0,
            "league_ranking": "18",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Velez Sarsfield",
            "yellow_card": 2,
            "hl": 1
          },
          "wdl": 0
        }
      ]
    },
    {
      "competition": {
        "_id": "63b6789e54f7855d27447652",
        "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
        "name": "Copa de la Liga Profesional",
        "name_zh": "阿职联杯",
        "season": "2023",
        "short_name": "Copa de la Liga Profesional"
      },
      "matches": [
        {
          "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2023",
            "short_name": "Copa de la Liga Profesional"
          },
          "match_id": "x7lm7phzkk99m2w",
          "match_status": "End",
          "match_time": 1696028400,
          "team_away": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 1,
            "ht_score": 0,
            "league_ranking": "9",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 1,
            "score": 0,
            "short_name": "Velez Sarsfield",
            "yellow_card": 4,
            "hl": 1
          },
          "team_home": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 10,
            "ht_score": 0,
            "league_ranking": "13",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 0,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 3,
            "hl": 0
          },
          "wdl": 0
        },
        {
          "competition": {
            "_id": "63b6789e54f7855d27447652",
            "logo": "https://img.thesports.com/football/competition/ec9ef69153d0c8de322ef6a37a91a7a5.png",
            "name": "Copa de la Liga Profesional",
            "name_zh": "阿职联杯",
            "season": "2022",
            "short_name": "Copa de la Liga Profesional"
          },
          "match_id": "y0or5jhz4z0nqwz",
          "match_status": "End",
          "match_time": 1651345200,
          "team_away": {
            "_id": "63b6786054f7855d2743dbd5",
            "corners": 4,
            "ht_score": 1,
            "league_ranking": "3",
            "logo": "https://img.thesports.com/football/team/95c9ef810563d777a5330b142f9ba38b.png",
            "name": "Club Atletico Tigre",
            "name_zh": "堤格雷",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 2,
            "short_name": "Club Atletico Tigre",
            "yellow_card": 2,
            "hl": 0
          },
          "team_home": {
            "_id": "63b6785f54f7855d2743d8f5",
            "corners": 2,
            "ht_score": 3,
            "league_ranking": "11",
            "logo": "https://img.thesports.com/football/team/2e02d3f27830c7f3642e6592e6b922dd.png",
            "name": "CA Velez Sarsfield",
            "name_zh": "萨斯菲尔德",
            "ot_score": 0,
            "penalty_score": 0,
            "red_card": 0,
            "score": 3,
            "short_name": "Velez Sarsfield",
            "yellow_card": 3,
            "hl": 1
          },
          "wdl": 1
        }
      ]
    }
]

const exampleBasketballH2hdata = {
    "_id": "65dd14c87163d904b206729a",
    "future": {
      "away": [
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "pxwrx5txvvvzqyk",
          "match_status": "Not started",
          "match_time": 1709166600,
          "team_away": {
            "_id": "63b6808854f7855d274ee17d",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/42d7b5ec22b2eb411d68f94a04eab742.png",
            "name": "Dallas Mavericks",
            "name_zh": "达拉斯独行侠",
            "short_name": "Mavericks"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "dn1m17tp1174moe",
          "match_status": "Not started",
          "match_time": 1709339400,
          "team_away": {
            "_id": "63b6808854f7855d274ee1f7",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/df3f6f8bb17fd1c618f60f0b14637140.png",
            "name": "Golden State Warriors",
            "name_zh": "金州勇士",
            "short_name": "Warriors"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "vjxm8xt5xxeoq6o",
          "match_status": "Not started",
          "match_time": 1709506800,
          "team_away": {
            "_id": "63b6808854f7855d274ee13e",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e52f6ac53681289c91703501a960cb3c.png",
            "name": "Charlotte Hornets",
            "name_zh": "夏洛特黄蜂",
            "short_name": "Hornets"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "3glrwyt3oly7qdy",
          "match_status": "Not started",
          "match_time": 1709685000,
          "team_away": {
            "_id": "63b6808854f7855d274ee1fe",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/2602b893bb3f8d381a5b0d978fad74e1.png",
            "name": "New Orleans Pelicans",
            "name_zh": "新奥尔良鹈鹕",
            "short_name": "Pelicans"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "l5ergytlp5yyr8k",
          "match_status": "Not started",
          "match_time": 1709863200,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee18d",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/da3c882a7e0bc592b4c1ba9d8c5fb68d.png",
            "name": "Phoenix Suns",
            "name_zh": "菲尼克斯太阳",
            "short_name": "Suns"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "318q6nt6k7p3mo9",
          "match_status": "Not started",
          "match_time": 1710039600,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee196",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/4512175b1415f69816e816160093bcc0.png",
            "name": "Portland Trail Blazers",
            "name_zh": "波特兰开拓者",
            "short_name": "Trail Blazers"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "x7lm73t3pnkvr2w",
          "match_status": "Not started",
          "match_time": 1710208800,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee207",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/403a12aa187f47045c18d137cd8103dc.png",
            "name": "Denver Nuggets",
            "name_zh": "丹佛掘金",
            "short_name": "Nuggets"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "jw2r02t6124zqz8",
          "match_status": "Not started",
          "match_time": 1710370800,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee18a",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/3f82122a48e98eaccc5e71307eba801a.png",
            "name": "Detroit Pistons",
            "name_zh": "底特律活塞",
            "short_name": "Pistons"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "y39mp4t09z9vmoj",
          "match_status": "Not started",
          "match_time": 1710545400,
          "team_away": {
            "_id": "63b6808854f7855d274ee135",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/0dc24d08ef0b5584e0b70f967db64b36.png",
            "name": "Orlando Magic",
            "name_zh": "奥兰多魔术",
            "short_name": "Magic"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "4jwq25tz1ew0q0v",
          "match_status": "Not started",
          "match_time": 1710712800,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "short_name": "Raptors"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee135",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/0dc24d08ef0b5584e0b70f967db64b36.png",
            "name": "Orlando Magic",
            "name_zh": "奥兰多魔术",
            "short_name": "Magic"
          }
        }
      ],
      "home": [
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "jw2r02t611yyqz8",
          "match_status": "Not started",
          "match_time": 1709166600,
          "team_away": {
            "_id": "63b6808854f7855d274ee1fe",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/2602b893bb3f8d381a5b0d978fad74e1.png",
            "name": "New Orleans Pelicans",
            "name_zh": "新奥尔良鹈鹕",
            "short_name": "Pelicans"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "l5ergytlpp74r8k",
          "match_status": "Not started",
          "match_time": 1709341200,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee1fe",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/2602b893bb3f8d381a5b0d978fad74e1.png",
            "name": "New Orleans Pelicans",
            "name_zh": "新奥尔良鹈鹕",
            "short_name": "Pelicans"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "23xmv1tpxxvxmg8",
          "match_status": "Not started",
          "match_time": 1709510400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee1b0",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/5305d1a7b721b5bef418041eff53ba82.png",
            "name": "San Antonio Spurs",
            "name_zh": "圣安东尼奥马刺",
            "short_name": "Spurs"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "dj2ry7te2dgdr1z",
          "match_status": "Not started",
          "match_time": 1709688600,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee17d",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/42d7b5ec22b2eb411d68f94a04eab742.png",
            "name": "Dallas Mavericks",
            "name_zh": "达拉斯独行侠",
            "short_name": "Mavericks"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "ednm9kt2edx9ryo",
          "match_status": "Not started",
          "match_time": 1709856000,
          "team_away": {
            "_id": "63b6808854f7855d274ee1f4",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/38794d0ac418d8f2d03bd17a2623f3ed.png",
            "name": "Minnesota Timberwolves",
            "name_zh": "明尼苏达森林狼",
            "short_name": "Timberwolves"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "2y8m4ptw14l8ml0",
          "match_status": "Not started",
          "match_time": 1710111600,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee135",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/0dc24d08ef0b5584e0b70f967db64b36.png",
            "name": "Orlando Magic",
            "name_zh": "奥兰多魔术",
            "short_name": "Magic"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "dj2ry7te24lvr1z",
          "match_status": "Not started",
          "match_time": 1710288000,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee3f2",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/319e03be75fee4098a83b1d0e01940b7.png",
            "name": "Oklahoma City Thunder",
            "name_zh": "俄克拉荷马城雷霆",
            "short_name": "Thunder"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "dj2ry7te21vwr1z",
          "match_status": "Not started",
          "match_time": 1710372600,
          "team_away": {
            "_id": "63b6808854f7855d274ee0fc",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/f15ed15d914b6a608e9a396f03c755b0.png",
            "name": "Chicago Bulls",
            "name_zh": "芝加哥公牛",
            "short_name": "Bulls"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "23xmv1tpx897mg8",
          "match_status": "Not started",
          "match_time": 1710630000,
          "team_away": {
            "_id": "63b6808854f7855d274ee199",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/4150a647c6e381a69980e98bb86582a5.png",
            "name": "Brooklyn Nets",
            "name_zh": "布鲁克林篮网",
            "short_name": "Nets"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          }
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "3glrwyt3o78yqdy",
          "match_status": "Not started",
          "match_time": 1710802800,
          "team_away": {
            "_id": "63b6808854f7855d274ee183",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/57c938e35ceb2ee92562a09c4165fb47.png",
            "name": "Cleveland Cavaliers",
            "name_zh": "克利夫兰骑士",
            "short_name": "Cavaliers"
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "short_name": "Pacers"
          }
        }
      ]
    },
    "history": {
      "away_history": [
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "zp5rzkt61xk7r82",
          "match_status": "End",
          "match_time": 1708734600,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 33,
            "score_q_2": 32,
            "score_q_3": 31,
            "score_q_4": 27,
            "short_name": "Raptors",
            "hl": 1,
            "score": 123
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee14a",
            "league_ranking": "10",
            "logo": "https://img.thesports.com/basketball/team/4e67b14905a05af9e1bd04406bf8690f.png",
            "name": "Atlanta Hawks",
            "name_zh": "亚特兰大老鹰",
            "ot_score": 0,
            "score_q_1": 22,
            "score_q_2": 42,
            "score_q_3": 26,
            "score_q_4": 31,
            "short_name": "Hawks",
            "hl": 0,
            "score": 121
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "1l4rjztje3ynm7v",
          "match_status": "End",
          "match_time": 1708646400,
          "team_away": {
            "_id": "63b6808854f7855d274ee199",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/4150a647c6e381a69980e98bb86582a5.png",
            "name": "Brooklyn Nets",
            "name_zh": "布鲁克林篮网",
            "ot_score": 0,
            "score_q_1": 21,
            "score_q_2": 27,
            "score_q_3": 23,
            "score_q_4": 22,
            "short_name": "Nets",
            "hl": 0,
            "score": 93
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 30,
            "score_q_2": 29,
            "score_q_3": 23,
            "score_q_4": 39,
            "short_name": "Raptors",
            "hl": 1,
            "score": 121
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "n54ql7tpdj65rvy",
          "match_status": "End",
          "match_time": 1707957000,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 34,
            "score_q_3": 36,
            "score_q_4": 26,
            "short_name": "Pacers",
            "hl": 0,
            "score": 127
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 36,
            "score_q_3": 32,
            "score_q_4": 22,
            "short_name": "Raptors",
            "hl": 1,
            "score": 125
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "318q6nt6kk0ymo9",
          "match_status": "End",
          "match_time": 1707784200,
          "team_away": {
            "_id": "63b6808854f7855d274ee1b0",
            "league_ranking": "15",
            "logo": "https://img.thesports.com/basketball/team/5305d1a7b721b5bef418041eff53ba82.png",
            "name": "San Antonio Spurs",
            "name_zh": "圣安东尼奥马刺",
            "ot_score": 0,
            "score_q_1": 34,
            "score_q_2": 33,
            "score_q_3": 36,
            "score_q_4": 19,
            "short_name": "Spurs",
            "hl": 0,
            "score": 122
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 28,
            "score_q_2": 22,
            "score_q_3": 25,
            "score_q_4": 24,
            "short_name": "Raptors",
            "hl": 1,
            "score": 99
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "n54ql7tpddz0rvy",
          "match_status": "End",
          "match_time": 1707611400,
          "team_away": {
            "_id": "63b6808854f7855d274ee183",
            "league_ranking": "2",
            "logo": "https://img.thesports.com/basketball/team/57c938e35ceb2ee92562a09c4165fb47.png",
            "name": "Cleveland Cavaliers",
            "name_zh": "克利夫兰骑士",
            "ot_score": 0,
            "score_q_1": 30,
            "score_q_2": 37,
            "score_q_3": 28,
            "score_q_4": 24,
            "short_name": "Cavaliers",
            "hl": 0,
            "score": 119
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 24,
            "score_q_2": 23,
            "score_q_3": 26,
            "score_q_4": 22,
            "short_name": "Raptors",
            "hl": 1,
            "score": 95
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "318q6nt6kk4ymo9",
          "match_status": "End",
          "match_time": 1707525000,
          "team_away": {
            "_id": "63b6808854f7855d274ee17a",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/bcfe797437f18526ff4e62177021f638.png",
            "name": "Houston Rockets",
            "name_zh": "休斯顿火箭",
            "ot_score": 0,
            "score_q_1": 20,
            "score_q_2": 29,
            "score_q_3": 22,
            "score_q_4": 33,
            "short_name": "Rockets",
            "hl": 0,
            "score": 104
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 34,
            "score_q_2": 27,
            "score_q_3": 27,
            "score_q_4": 19,
            "short_name": "Raptors",
            "hl": 1,
            "score": 107
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "2y8m4ptw1156ml0",
          "match_status": "End",
          "match_time": 1707350400,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 27,
            "score_q_2": 27,
            "score_q_3": 37,
            "score_q_4": 32,
            "short_name": "Raptors",
            "hl": 1,
            "score": 123
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee13e",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/basketball/team/e52f6ac53681289c91703501a960cb3c.png",
            "name": "Charlotte Hornets",
            "name_zh": "夏洛特黄蜂",
            "ot_score": 0,
            "score_q_1": 36,
            "score_q_2": 24,
            "score_q_3": 37,
            "score_q_4": 20,
            "short_name": "Hornets",
            "hl": 0,
            "score": 117
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "3glrwyt3oo63qdy",
          "match_status": "End",
          "match_time": 1707181200,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 19,
            "score_q_2": 31,
            "score_q_3": 21,
            "score_q_4": 29,
            "short_name": "Raptors",
            "hl": 1,
            "score": 100
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee1fe",
            "league_ranking": "7",
            "logo": "https://img.thesports.com/basketball/team/2602b893bb3f8d381a5b0d978fad74e1.png",
            "name": "New Orleans Pelicans",
            "name_zh": "新奥尔良鹈鹕",
            "ot_score": 0,
            "score_q_1": 36,
            "score_q_2": 31,
            "score_q_3": 38,
            "score_q_4": 33,
            "short_name": "Pelicans",
            "hl": 0,
            "score": 138
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "y0or5gtz10xoqwz",
          "match_status": "End",
          "match_time": 1707091200,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 17,
            "score_q_1": 33,
            "score_q_2": 30,
            "score_q_3": 24,
            "score_q_4": 23,
            "short_name": "Raptors",
            "hl": 1,
            "score": 135
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee3f2",
            "league_ranking": "1",
            "logo": "https://img.thesports.com/basketball/team/319e03be75fee4098a83b1d0e01940b7.png",
            "name": "Oklahoma City Thunder",
            "name_zh": "俄克拉荷马城雷霆",
            "ot_score": 25,
            "score_q_1": 23,
            "score_q_2": 24,
            "score_q_3": 34,
            "score_q_4": 29,
            "short_name": "Thunder",
            "hl": 0,
            "score": 135
          },
          "wdl": 0
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "k82re8t011p2rep",
          "match_status": "End",
          "match_time": 1706922000,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 23,
            "score_q_2": 24,
            "score_q_3": 25,
            "score_q_4": 34,
            "short_name": "Raptors",
            "hl": 1,
            "score": 106
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee17a",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/bcfe797437f18526ff4e62177021f638.png",
            "name": "Houston Rockets",
            "name_zh": "休斯顿火箭",
            "ot_score": 0,
            "score_q_1": 37,
            "score_q_2": 29,
            "score_q_3": 36,
            "score_q_4": 33,
            "short_name": "Rockets",
            "hl": 0,
            "score": 135
          },
          "wdl": -1
        }
      ],
      "home_history": [
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "k82re8t013pnrep",
          "match_status": "End",
          "match_time": 1708898400,
          "team_away": {
            "_id": "63b6808854f7855d274ee17d",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/42d7b5ec22b2eb411d68f94a04eab742.png",
            "name": "Dallas Mavericks",
            "name_zh": "达拉斯独行侠",
            "ot_score": 0,
            "score_q_1": 32,
            "score_q_2": 28,
            "score_q_3": 31,
            "score_q_4": 20,
            "short_name": "Mavericks",
            "hl": 0,
            "score": 111
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "7",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 32,
            "score_q_2": 35,
            "score_q_3": 33,
            "score_q_4": 33,
            "short_name": "Pacers",
            "hl": 1,
            "score": 133
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "4jwq25tz11vgq0v",
          "match_status": "End",
          "match_time": 1708646400,
          "team_away": {
            "_id": "63b6808854f7855d274ee18a",
            "league_ranking": "15",
            "logo": "https://img.thesports.com/basketball/team/3f82122a48e98eaccc5e71307eba801a.png",
            "name": "Detroit Pistons",
            "name_zh": "底特律活塞",
            "ot_score": 0,
            "score_q_1": 25,
            "score_q_2": 18,
            "score_q_3": 45,
            "score_q_4": 27,
            "short_name": "Pistons",
            "hl": 0,
            "score": 115
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 42,
            "score_q_2": 30,
            "score_q_3": 30,
            "score_q_4": 27,
            "short_name": "Pacers",
            "hl": 1,
            "score": 129
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "n54ql7tpdj65rvy",
          "match_status": "End",
          "match_time": 1707957000,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 34,
            "score_q_3": 36,
            "score_q_4": 26,
            "short_name": "Pacers",
            "hl": 1,
            "score": 127
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 36,
            "score_q_3": 32,
            "score_q_4": 22,
            "short_name": "Raptors",
            "hl": 0,
            "score": 125
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "vjxm8xt5xx3lq6o",
          "match_status": "End",
          "match_time": 1707782400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 24,
            "score_q_2": 25,
            "score_q_3": 31,
            "score_q_4": 22,
            "short_name": "Pacers",
            "hl": 1,
            "score": 102
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee13e",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/basketball/team/e52f6ac53681289c91703501a960cb3c.png",
            "name": "Charlotte Hornets",
            "name_zh": "夏洛特黄蜂",
            "ot_score": 0,
            "score_q_1": 25,
            "score_q_2": 23,
            "score_q_3": 33,
            "score_q_4": 30,
            "short_name": "Hornets",
            "hl": 0,
            "score": 111
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "dj2ry7te2239r1z",
          "match_status": "End",
          "match_time": 1707611400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 26,
            "score_q_2": 35,
            "score_q_3": 30,
            "score_q_4": 34,
            "short_name": "Pacers",
            "hl": 1,
            "score": 125
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee0fd",
            "league_ranking": "4",
            "logo": "https://img.thesports.com/basketball/team/49f8b0ef2ed529b44dba6ebb99a0d5ff.png",
            "name": "New York Knicks",
            "name_zh": "纽约尼克斯",
            "ot_score": 0,
            "score_q_1": 27,
            "score_q_2": 31,
            "score_q_3": 24,
            "score_q_4": 29,
            "short_name": "Knicks",
            "hl": 0,
            "score": 111
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "4wyrn1to9vj5q86",
          "match_status": "End",
          "match_time": 1707436800,
          "team_away": {
            "_id": "63b6808854f7855d274ee1f7",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/df3f6f8bb17fd1c618f60f0b14637140.png",
            "name": "Golden State Warriors",
            "name_zh": "金州勇士",
            "ot_score": 0,
            "score_q_1": 45,
            "score_q_2": 25,
            "score_q_3": 25,
            "score_q_4": 36,
            "short_name": "Warriors",
            "hl": 0,
            "score": 131
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 34,
            "score_q_2": 24,
            "score_q_3": 18,
            "score_q_4": 33,
            "short_name": "Pacers",
            "hl": 1,
            "score": 109
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "y39mp4t0997nmoj",
          "match_status": "End",
          "match_time": 1707264000,
          "team_away": {
            "_id": "63b6808854f7855d274ee17a",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/bcfe797437f18526ff4e62177021f638.png",
            "name": "Houston Rockets",
            "name_zh": "休斯顿火箭",
            "ot_score": 0,
            "score_q_1": 39,
            "score_q_2": 36,
            "score_q_3": 24,
            "score_q_4": 30,
            "short_name": "Rockets",
            "hl": 0,
            "score": 129
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 41,
            "score_q_2": 27,
            "score_q_3": 38,
            "score_q_4": 26,
            "short_name": "Pacers",
            "hl": 1,
            "score": 132
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "l7oqd4t81lpjq51",
          "match_status": "End",
          "match_time": 1707087600,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 26,
            "score_q_2": 29,
            "score_q_3": 36,
            "score_q_4": 24,
            "short_name": "Pacers",
            "hl": 1,
            "score": 115
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee13e",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/basketball/team/e52f6ac53681289c91703501a960cb3c.png",
            "name": "Charlotte Hornets",
            "name_zh": "夏洛特黄蜂",
            "ot_score": 0,
            "score_q_1": 13,
            "score_q_2": 31,
            "score_q_3": 32,
            "score_q_4": 23,
            "short_name": "Hornets",
            "hl": 0,
            "score": 99
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "vjxm8xt5x2g9q6o",
          "match_status": "End",
          "match_time": 1706920200,
          "team_away": {
            "_id": "63b6808854f7855d274ee132",
            "league_ranking": "5",
            "logo": "https://img.thesports.com/basketball/team/1fc010aba7ac510b5364e5f76ca4f060.png",
            "name": "Sacramento Kings",
            "name_zh": "萨克拉门托国王",
            "ot_score": 0,
            "score_q_1": 38,
            "score_q_2": 33,
            "score_q_3": 28,
            "score_q_4": 34,
            "short_name": "Kings",
            "hl": 0,
            "score": 133
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 39,
            "score_q_2": 25,
            "score_q_3": 24,
            "score_q_4": 34,
            "short_name": "Pacers",
            "hl": 1,
            "score": 122
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "y0or5gtz1g27qwz",
          "match_status": "End",
          "match_time": 1706833800,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 36,
            "score_q_2": 22,
            "score_q_3": 26,
            "score_q_4": 21,
            "short_name": "Pacers",
            "hl": 1,
            "score": 105
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee0fd",
            "league_ranking": "3",
            "logo": "https://img.thesports.com/basketball/team/49f8b0ef2ed529b44dba6ebb99a0d5ff.png",
            "name": "New York Knicks",
            "name_zh": "纽约尼克斯",
            "ot_score": 0,
            "score_q_1": 26,
            "score_q_2": 25,
            "score_q_3": 28,
            "score_q_4": 30,
            "short_name": "Knicks",
            "hl": 0,
            "score": 109
          },
          "wdl": -1
        }
      ],
      "vs_history": [
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "n54ql7tpdj65rvy",
          "match_status": "End",
          "match_time": 1707957000,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 34,
            "score_q_3": 36,
            "score_q_4": 26,
            "short_name": "Pacers",
            "hl": 1,
            "score": 127
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 36,
            "score_q_3": 32,
            "score_q_4": 22,
            "short_name": "Raptors",
            "hl": 0,
            "score": 125
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "l7oqd4t81l5jq51",
          "match_status": "End",
          "match_time": 1700699400,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 27,
            "score_q_2": 41,
            "score_q_3": 32,
            "score_q_4": 32,
            "short_name": "Raptors",
            "hl": 0,
            "score": 132
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 30,
            "score_q_3": 36,
            "score_q_4": 30,
            "short_name": "Pacers",
            "hl": 1,
            "score": 131
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "zp5rzkt6jlzer82",
          "match_status": "End",
          "match_time": 1679527800,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 36,
            "score_q_2": 22,
            "score_q_3": 25,
            "score_q_4": 35,
            "short_name": "Pacers",
            "hl": 1,
            "score": 118
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "9",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 26,
            "score_q_2": 26,
            "score_q_3": 26,
            "score_q_4": 36,
            "short_name": "Raptors",
            "hl": 0,
            "score": 114
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "y0or5gtzlpg8qwz",
          "match_status": "End",
          "match_time": 1672704000,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 33,
            "score_q_2": 24,
            "score_q_3": 33,
            "score_q_4": 24,
            "short_name": "Raptors",
            "hl": 0,
            "score": 114
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 29,
            "score_q_2": 37,
            "score_q_3": 25,
            "score_q_4": 31,
            "short_name": "Pacers",
            "hl": 1,
            "score": 122
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "jw2r02t6ly5pqz8",
          "match_status": "End",
          "match_time": 1668297600,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "5",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 26,
            "score_q_2": 39,
            "score_q_3": 25,
            "score_q_4": 14,
            "short_name": "Raptors",
            "hl": 0,
            "score": 104
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "10",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 28,
            "score_q_2": 24,
            "score_q_3": 30,
            "score_q_4": 36,
            "short_name": "Pacers",
            "hl": 1,
            "score": 118
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "k82re8tx71lyrep",
          "match_status": "End",
          "match_time": 1648337400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 21,
            "score_q_2": 25,
            "score_q_3": 24,
            "score_q_4": 21,
            "short_name": "Pacers",
            "hl": 1,
            "score": 91
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "7",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 41,
            "score_q_2": 33,
            "score_q_3": 22,
            "score_q_4": 35,
            "short_name": "Raptors",
            "hl": 0,
            "score": 131
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "3glrwytpvz7dqdy",
          "match_status": "End",
          "match_time": 1637974800,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 22,
            "score_q_3": 24,
            "score_q_4": 16,
            "short_name": "Raptors",
            "hl": 0,
            "score": 97
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 35,
            "score_q_3": 26,
            "score_q_4": 22,
            "short_name": "Pacers",
            "hl": 1,
            "score": 114
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "jw2r02t0ox78qz8",
          "match_status": "End",
          "match_time": 1635636600,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "9",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 22,
            "score_q_2": 24,
            "score_q_3": 21,
            "score_q_4": 30,
            "short_name": "Raptors",
            "hl": 0,
            "score": 97
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "14",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 25,
            "score_q_2": 22,
            "score_q_3": 19,
            "score_q_4": 28,
            "short_name": "Pacers",
            "hl": 1,
            "score": 94
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "6ypq3ktnjzgwmd7",
          "match_status": "End",
          "match_time": 1635377400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "14",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 24,
            "score_q_2": 24,
            "score_q_3": 23,
            "score_q_4": 29,
            "short_name": "Pacers",
            "hl": 1,
            "score": 100
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 29,
            "score_q_2": 28,
            "score_q_3": 30,
            "score_q_4": 31,
            "short_name": "Raptors",
            "hl": 0,
            "score": 118
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "x7lm73t7653yr2w",
          "match_status": "End",
          "match_time": 1621184400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "10",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 37,
            "score_q_3": 26,
            "score_q_4": 31,
            "short_name": "Pacers",
            "hl": 1,
            "score": 125
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 30,
            "score_q_2": 25,
            "score_q_3": 28,
            "score_q_4": 30,
            "short_name": "Raptors",
            "hl": 0,
            "score": 113
          },
          "wdl": 1
        }
      ],
      "vs_history_statistic": {
        "win": 6,
        "loss": 4,
        "draw": 0,
        "goal_rate": "114 - 114.5"
      },
      "home_history_statistic": {
        "win": 6,
        "loss": 4,
        "draw": 0,
        "goal_rate": "119.9 - 117.4"
      },
      "away_history_statistic": {
        "win": 4,
        "loss": 5,
        "draw": 1,
        "goal_rate": "113.4 - 121.1"
      }
    },
    "id": "y39mp4t0993zmoj",
    "match_info": {
      "competition": {
        "_id": "63b6809054f7855d274efdd9",
        "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
        "name": "NBA",
        "name_zh": "NBA",
        "short_name": "NBA"
      },
      "match_id": "y39mp4t0993zmoj",
      "match_status": "Not started",
      "match_time": 1708992000,
      "section_remaining_time": 0,
      "team_away": {
        "_id": "63b6808854f7855d274ee102",
        "league_ranking": "12",
        "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
        "name": "Toronto Raptors",
        "name_zh": "多伦多猛龙",
        "short_name": "Raptors"
      },
      "team_home": {
        "_id": "63b6808854f7855d274ee12f",
        "league_ranking": "6",
        "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
        "name": "Indiana Pacers",
        "name_zh": "印第安纳步行者",
        "short_name": "Pacers"
      }
    },
    "sports": "basketball"
}

const exampleBasketBallMap = [
    {
      "competition": {
        "_id": "63b6809054f7855d274efdd9",
        "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
        "name": "NBA",
        "name_zh": "NBA",
        "short_name": "NBA"
      },
      "matches": [
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "n54ql7tpdj65rvy",
          "match_status": "End",
          "match_time": 1707957000,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 34,
            "score_q_3": 36,
            "score_q_4": 26,
            "short_name": "Pacers",
            "hl": 1,
            "score": 127
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 36,
            "score_q_3": 32,
            "score_q_4": 22,
            "short_name": "Raptors",
            "hl": 0,
            "score": 125
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "l7oqd4t81l5jq51",
          "match_status": "End",
          "match_time": 1700699400,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 27,
            "score_q_2": 41,
            "score_q_3": 32,
            "score_q_4": 32,
            "short_name": "Raptors",
            "hl": 0,
            "score": 132
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "6",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 30,
            "score_q_3": 36,
            "score_q_4": 30,
            "short_name": "Pacers",
            "hl": 1,
            "score": 131
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "zp5rzkt6jlzer82",
          "match_status": "End",
          "match_time": 1679527800,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "11",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 36,
            "score_q_2": 22,
            "score_q_3": 25,
            "score_q_4": 35,
            "short_name": "Pacers",
            "hl": 1,
            "score": 118
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "9",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 26,
            "score_q_2": 26,
            "score_q_3": 26,
            "score_q_4": 36,
            "short_name": "Raptors",
            "hl": 0,
            "score": 114
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "y0or5gtzlpg8qwz",
          "match_status": "End",
          "match_time": 1672704000,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 33,
            "score_q_2": 24,
            "score_q_3": 33,
            "score_q_4": 24,
            "short_name": "Raptors",
            "hl": 0,
            "score": 114
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 29,
            "score_q_2": 37,
            "score_q_3": 25,
            "score_q_4": 31,
            "short_name": "Pacers",
            "hl": 1,
            "score": 122
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "jw2r02t6ly5pqz8",
          "match_status": "End",
          "match_time": 1668297600,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "5",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 26,
            "score_q_2": 39,
            "score_q_3": 25,
            "score_q_4": 14,
            "short_name": "Raptors",
            "hl": 0,
            "score": 104
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "10",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 28,
            "score_q_2": 24,
            "score_q_3": 30,
            "score_q_4": 36,
            "short_name": "Pacers",
            "hl": 1,
            "score": 118
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "k82re8tx71lyrep",
          "match_status": "End",
          "match_time": 1648337400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 21,
            "score_q_2": 25,
            "score_q_3": 24,
            "score_q_4": 21,
            "short_name": "Pacers",
            "hl": 1,
            "score": 91
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "7",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 41,
            "score_q_2": 33,
            "score_q_3": 22,
            "score_q_4": 35,
            "short_name": "Raptors",
            "hl": 0,
            "score": 131
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "3glrwytpvz7dqdy",
          "match_status": "End",
          "match_time": 1637974800,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 35,
            "score_q_2": 22,
            "score_q_3": 24,
            "score_q_4": 16,
            "short_name": "Raptors",
            "hl": 0,
            "score": 97
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "13",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 35,
            "score_q_3": 26,
            "score_q_4": 22,
            "short_name": "Pacers",
            "hl": 1,
            "score": 114
          },
          "wdl": 1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "jw2r02t0ox78qz8",
          "match_status": "End",
          "match_time": 1635636600,
          "team_away": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "9",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 22,
            "score_q_2": 24,
            "score_q_3": 21,
            "score_q_4": 30,
            "short_name": "Raptors",
            "hl": 0,
            "score": 97
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "14",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 25,
            "score_q_2": 22,
            "score_q_3": 19,
            "score_q_4": 28,
            "short_name": "Pacers",
            "hl": 1,
            "score": 94
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "6ypq3ktnjzgwmd7",
          "match_status": "End",
          "match_time": 1635377400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "14",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 24,
            "score_q_2": 24,
            "score_q_3": 23,
            "score_q_4": 29,
            "short_name": "Pacers",
            "hl": 1,
            "score": 100
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 29,
            "score_q_2": 28,
            "score_q_3": 30,
            "score_q_4": 31,
            "short_name": "Raptors",
            "hl": 0,
            "score": 118
          },
          "wdl": -1
        },
        {
          "competition": {
            "_id": "63b6809054f7855d274efdd9",
            "logo": "https://img.thesports.com/basketball/competition/061f5ab5b1a975fc1004529ec3f11fca.png",
            "name": "NBA",
            "name_zh": "NBA",
            "short_name": "NBA"
          },
          "match_id": "x7lm73t7653yr2w",
          "match_status": "End",
          "match_time": 1621184400,
          "team_away": {
            "_id": "63b6808854f7855d274ee12f",
            "league_ranking": "10",
            "logo": "https://img.thesports.com/basketball/team/6f313b682482799762cf60dbc30dbfae.png",
            "name": "Indiana Pacers",
            "name_zh": "印第安纳步行者",
            "ot_score": 0,
            "score_q_1": 31,
            "score_q_2": 37,
            "score_q_3": 26,
            "score_q_4": 31,
            "short_name": "Pacers",
            "hl": 1,
            "score": 125
          },
          "team_home": {
            "_id": "63b6808854f7855d274ee102",
            "league_ranking": "12",
            "logo": "https://img.thesports.com/basketball/team/e299ddecec93dc5c8db83b1761e2fa1f.png",
            "name": "Toronto Raptors",
            "name_zh": "多伦多猛龙",
            "ot_score": 0,
            "score_q_1": 30,
            "score_q_2": 25,
            "score_q_3": 28,
            "score_q_4": 30,
            "short_name": "Raptors",
            "hl": 0,
            "score": 113
          },
          "wdl": 1
        }
      ]
    }
]


export const H2hBasketBallCard: Story = {
    args: {
        sportType: "basketball",
        h2hdata: exampleBasketballH2hdata,
        mappedResult: exampleBasketBallMap,
    }
};

export const epCard: Story = {
    args: {
        sportType: "football",
        h2hdata: exampleFootballH2hdata,
        mappedResult: exampleFootballMap,
    }
};