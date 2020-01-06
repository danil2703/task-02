const json = `{
    "block": "page",
    "mix": [
        {
            "block": "theme",
            "mods": {
                "color": "project-default",
                "size": "default",
                "space": "default",
                "gap": "small"
            }
        }
    ],
    "content": [
        {
            "block": "header",
            "content": {
                "block": "header",
                "elem": "content",
                "content": [
                    {
                        "block": "header",
                        "elem": "logo"
                    },
                    [
                        {
                            "block": "onoffswitch",
                            "mods": {
                                "checked": true
                            },
                            "content": [
                                {
                                    "block": "onoffswitch",
                                    "elem": "button"
                                }
                            ]
                        }
                    ]
                ]
            }
        },
        {
            "block": "layout",
            "content": [
                {
                    "block": "layout",
                    "elem": "container",
                    "elemMods": {
                        "size": "m",
                        "align": "center"
                    },
                    "mix": [
                        {
                            "block": "section",
                            "mods": {
                                "indent-b": "xxxxl"
                            }
                        }
                    ],
                    "content": [
                        {
                            "block": "grid",
                            "mods": {
                                "m-columns": "12",
                                "col-gap": "full",
                                "row-gap": "full"
                            },
                            "content": [
                                {
                                    "block": "grid",
                                    "elem": "fraction",
                                    "elemMods": {
                                        "m-col": 4
                                    },
                                    "content": [
                                        {
                                            "block": "cover",
                                            "mix": [
                                                {
                                                    "block": "theme",
                                                    "mods": {
                                                        "color": "project-brand"
                                                    }
                                                },
                                                {
                                                    "block": "card",
                                                    "mods": {
                                                        "view": "default"
                                                    }
                                                }
                                            ],
                                            "content": [
                                                {
                                                    "block": "cover",
                                                    "elem": "info",
                                                    "mix": [
                                                        {
                                                            "block": "card",
                                                            "elem": "content",
                                                            "elemMods": {
                                                                "space-a": "xxl"
                                                            }
                                                        }
                                                    ],
                                                    "content": [
                                                        {
                                                            "block": "cover",
                                                            "elem": "preview",
                                                            "content": [
                                                                {
                                                                    "block": "image"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "block": "text",
                                                            "mods": {
                                                                "view": "primary",
                                                                "size": "xxl"
                                                            },
                                                            "mix": [
                                                                {
                                                                    "block": "cover",
                                                                    "elem": "text"
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "text",
                                                                    "elem": "word",
                                                                    "elemMods": {
                                                                        "width": "l"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "block": "text",
                                                            "mods": {
                                                                "view": "primary",
                                                                "size": "xxl"
                                                            },
                                                            "mix": [
                                                                {
                                                                    "block": "cover",
                                                                    "elem": "text"
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "text",
                                                                    "elem": "word",
                                                                    "elemMods": {
                                                                        "width": "m"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "block": "cover",
                                                    "elem": "footer",
                                                    "mix": [
                                                        {
                                                            "block": "card",
                                                            "elem": "footer",
                                                            "elemMods": {
                                                                "space-a": "xxl"
                                                            }
                                                        }
                                                    ],
                                                    "content": [
                                                        {
                                                            "block": "button",
                                                            "mods": {
                                                                "size": "l",
                                                                "width": "full"
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "block": "grid",
                                    "elem": "fraction",
                                    "elemMods": {
                                        "m-col": 8
                                    },
                                    "content": [
                                        {
                                            "block": "text",
                                            "mods": {
                                                "size": "xxl",
                                                "view": "primary",
                                                "type": "h1"
                                            },
                                            "content": [
                                                {
                                                    "block": "text",
                                                    "elem": "word",
                                                    "elemMods": {
                                                        "width": "l"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "block": "text",
                                            "mods": {
                                                "view": "primary",
                                                "size": "m"
                                            },
                                            "content": [
                                                [
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    }
                                                ]
                                            ]
                                        },
                                        {
                                            "block": "text",
                                            "mods": {
                                                "size": "xl",
                                                "view": "primary",
                                                "type": "h2"
                                            },
                                            "content": [
                                                {
                                                    "block": "text",
                                                    "elem": "word",
                                                    "elemMods": {
                                                        "width": "l"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "block": "text",
                                            "mods": {
                                                "view": "primary",
                                                "size": "m"
                                            },
                                            "content": [
                                                [
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "l"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "m"
                                                        }
                                                    },
                                                    {
                                                        "block": "text",
                                                        "elem": "word",
                                                        "elemMods": {
                                                            "width": "s"
                                                        }
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "block": "layout",
                    "elem": "container",
                    "mix": [
                        {
                            "block": "theme",
                            "mods": {
                                "color": "project-inverse"
                            }
                        },
                        {
                            "block": "section",
                            "mods": {
                                "space-v": "xxxxl"
                            }
                        }
                    ],
                    "content": [
                        {
                            "block": "layout",
                            "elem": "container",
                            "elemMods": {
                                "size": "m",
                                "align": "center"
                            },
                            "content": [
                                {
                                    "block": "text",
                                    "mods": {
                                        "view": "primary",
                                        "size": "xl"
                                    },
                                    "mix": [
                                        {
                                            "block": "product",
                                            "elem": "title"
                                        }
                                    ],
                                    "content": [
                                        {
                                            "block": "text",
                                            "elem": "word",
                                            "elemMods": {
                                                "width": "l"
                                            }
                                        },
                                        {
                                            "block": "text",
                                            "elem": "word",
                                            "elemMods": {
                                                "width": "l"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "block": "grid",
                                    "mods": {
                                        "m-columns": 12,
                                        "row-gap": "half",
                                        "col-gap": "half"
                                    },
                                    "content": [
                                        {
                                            "block": "grid",
                                            "elem": "fraction",
                                            "elemMods": {
                                                "m-col": 3
                                            },
                                            "content": [
                                                {
                                                    "block": "product",
                                                    "mix": [
                                                        {
                                                            "block": "card",
                                                            "mods": {
                                                                "view": "default",
                                                                "border": "all"
                                                            }
                                                        },
                                                        {
                                                            "block": "theme",
                                                            "mods": {
                                                                "color": "project-inverse"
                                                            }
                                                        }
                                                    ],
                                                    "content": [
                                                        {
                                                            "block": "product",
                                                            "elem": "content",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "content",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "product",
                                                                    "elem": "image",
                                                                    "mix": [
                                                                        {
                                                                            "block": "theme",
                                                                            "mods": {
                                                                                "color": "project-default"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "content": [
                                                                        {
                                                                            "block": "image"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "block": "product",
                                                            "elem": "footer",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "footer",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "m",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "l"
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "s",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "m"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "block": "grid",
                                            "elem": "fraction",
                                            "elemMods": {
                                                "m-col": 3
                                            },
                                            "content": [
                                                {
                                                    "block": "product",
                                                    "mix": [
                                                        {
                                                            "block": "card",
                                                            "mods": {
                                                                "view": "default",
                                                                "border": "all"
                                                            }
                                                        },
                                                        {
                                                            "block": "theme",
                                                            "mods": {
                                                                "color": "project-inverse"
                                                            }
                                                        }
                                                    ],
                                                    "content": [
                                                        {
                                                            "block": "product",
                                                            "elem": "content",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "content",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "product",
                                                                    "elem": "image",
                                                                    "mix": [
                                                                        {
                                                                            "block": "theme",
                                                                            "mods": {
                                                                                "color": "project-default"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "content": [
                                                                        {
                                                                            "block": "image"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "block": "product",
                                                            "elem": "footer",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "footer",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "m",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "l"
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "s",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "m"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "block": "grid",
                                            "elem": "fraction",
                                            "elemMods": {
                                                "m-col": 3
                                            },
                                            "content": [
                                                {
                                                    "block": "product",
                                                    "mix": [
                                                        {
                                                            "block": "card",
                                                            "mods": {
                                                                "view": "default",
                                                                "border": "all"
                                                            }
                                                        },
                                                        {
                                                            "block": "theme",
                                                            "mods": {
                                                                "color": "project-inverse"
                                                            }
                                                        }
                                                    ],
                                                    "content": [
                                                        {
                                                            "block": "product",
                                                            "elem": "content",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "content",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "product",
                                                                    "elem": "image",
                                                                    "mix": [
                                                                        {
                                                                            "block": "theme",
                                                                            "mods": {
                                                                                "color": "project-default"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "content": [
                                                                        {
                                                                            "block": "image"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "block": "product",
                                                            "elem": "footer",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "footer",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "m",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "l"
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "s",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "m"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "block": "grid",
                                            "elem": "fraction",
                                            "elemMods": {
                                                "m-col": 3
                                            },
                                            "content": [
                                                {
                                                    "block": "product",
                                                    "mix": [
                                                        {
                                                            "block": "card",
                                                            "mods": {
                                                                "view": "default",
                                                                "border": "all"
                                                            }
                                                        },
                                                        {
                                                            "block": "theme",
                                                            "mods": {
                                                                "color": "project-inverse"
                                                            }
                                                        }
                                                    ],
                                                    "content": [
                                                        {
                                                            "block": "product",
                                                            "elem": "content",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "content",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "product",
                                                                    "elem": "image",
                                                                    "mix": [
                                                                        {
                                                                            "block": "theme",
                                                                            "mods": {
                                                                                "color": "project-default"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "content": [
                                                                        {
                                                                            "block": "image"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "block": "product",
                                                            "elem": "footer",
                                                            "mix": [
                                                                {
                                                                    "block": "card",
                                                                    "elem": "footer",
                                                                    "elemMods": {
                                                                        "space-a": "m"
                                                                    }
                                                                }
                                                            ],
                                                            "content": [
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "m",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "l"
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "block": "text",
                                                                    "mods": {
                                                                        "size": "s",
                                                                        "view": "primary"
                                                                    },
                                                                    "content": [
                                                                        {
                                                                            "block": "text",
                                                                            "elem": "word",
                                                                            "elemMods": {
                                                                                "width": "m"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "block": "footer",
            "content": [
                {
                    "block": "footer",
                    "elem": "content",
                    "content": [
                        {
                            "block": "text",
                            "mods": {
                                "view": "primary",
                                "size": "l"
                            },
                            "content": [
                                {
                                    "block": "text",
                                    "elem": "word",
                                    "elemMods": {
                                        "width": "l"
                                    }
                                },
                                {
                                    "block": "text",
                                    "elem": "word",
                                    "elemMods": {
                                        "width": "s"
                                    }
                                }
                            ]
                        },
                        {
                            "block": "text",
                            "mods": {
                                "view": "primary",
                                "size": "l"
                            },
                            "content": [
                                {
                                    "block": "text",
                                    "elem": "word",
                                    "elemMods": {
                                        "width": "l"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}`;

lint(json);

function lint(string) {
    let object = JSON.parse(string);
    let errors = [];
    let headers = {h1: false, h2: false};
    errors = lintMain(object, errors, string, headers);
    console.log(errors);
    return errors;
}

function lintMain(object, errors, string, headers){
    console.log(object.block);
    switch(object.block){
        case 'warning':
            errors = lintWarning(object, errors, string);
            break;
        case 'grid':
            errors = lintGrid(object.content, object.mods['m-columns'], errors, string);
            break;
        case 'text': 
            errors = lintText(object, headers, errors);
            break;
        default:
            if(Array.isArray(object.content)) {
                object.content.forEach(item=>{
                    error = lintMain(item, errors, string, headers);
                });
            }
            else {
                if(typeof(object.content) === 'object') {
                    for(key in object.content) {
                        error = lintMain(object.content[key], errors, string, headers);
                    }
                }
            }
    }
    return errors;
}

function lintText(object, headers, errors){
    if(object.mods.type === 'h1') {
        if(headers.h1) {
            errors.push({
                "code": "TEXT.SEVERAL_H1",
                "error": "Заголовок первого уровня на странице должен быть единственным",
                "location": {
                    "start": { "column": 1, "line": 1 },
                    "end": { "column": 2, "line": 12 }
                }
            });
        }
        headers.h1 = true;
    }
    if(object.mods.type === 'h2') {
        headers.h2 = true;
        if(!headers.h1) {
            errors.push({
                "code": "TEXT.INVALID_H2_POSITION",
                "error": "Заголовок второго уровня не может находиться перед заголовком первого уровня",
                "location": {
                    "start": { "column": 1, "line": 1 },
                    "end": { "column": 2, "line": 12 }
                }
            });
        }
    }
    if(object.mods.type === 'h3') {
        if(!headers.h2) {
            errors.push({
                "code": "TEXT.INVALID_H3_POSITION",
                "error": "Заголовок третьего уровня не может находиться перед заголовком второго уровня",
                "location": {
                    "start": { "column": 1, "line": 1 },
                    "end": { "column": 2, "line": 12 }
                }
            });
        }
    }
    return errors;
}

function lintGrid(content, gridSize, errors, str){
    let marketing = 0;
    let marketingBlocks = ['commercial', 'offer'];
    let infoBlocks = ['payment', 'warning', 'product', 'history', 'cover', 'collect', 'articles', 'subscribtion', 'event'];
    content.forEach(item => {
        if(item.elem == 'fraction') {
            if(marketingBlocks.includes(item.content[0].block)){
                marketing += +item.elemMods['m-col'];
            }
        }
    });
    if(marketing > gridSize / 2) {
        errors.push({
            "code": "GRID.TOO_MUCH_MARKETING_BLOCKS",
            "error": "Маркетинговые блоки не могут занимать больше половины от всех колонок блока grid",
            "location": {
                "start": { "column": 1, "line": 1 },
                "end": { "column": 2, "line": str.split('\n').length }
            }
        });
    }
    return errors;
}   

function lintWarning(object, errors, str){
    let textSize;
    let firstBlock = false;
    
    object.content.forEach(element => {
        if(element.elem === 'content') {
            element.content.forEach((item, index) => {
                if(index === 0) {
                    textSize = item.mods.size;
                    return;
                }
                if(textSize !== item.mods.size) {
                    errors.push({
                        "code": "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
                        "error": "Тексты в блоке warning должны быть одного размера",
                        "location": {
                            "start": { "column": 1, "line": 1 },
                            "end": { "column": 2, "line": str.split('\n').length }
                        }
                    });
                }
            });
        }
        if(element.block === 'placeholder') {
            errors = lintWarningPlaceholder(element, errors, str);
            firstBlock = 'placeholder';
        }
        if(element.block === 'button') {
            error = lintWarningButton(element, textSize, errors, str);
            error = lintWarningWhoFirst(firstBlock, errors, str);
        }
    });

    return errors;
}

// 02
function lintWarningButton(button, textSize, errors, str) {
    let sizes = ['s', 'm', 'l', 'xl', 'xxl'];
    let line, column;

    if(button.mods.size !== sizes.indexOf(textSize) + 1) {
        str.split('\n').forEach((item, index) => {
            if(item.indexOf('button') !== -1) {
                line = index + 1;
                column = item.length;
            }
        });
        errors.push({
            "code": "WARNING.INVALID_BUTTON_SIZE",
            "error": "Размер кнопки блока warning должен быть на 1 шаг больше эталонного",
            "location": {
                "start": { "column": 1, "line": line },
                "end": { "column": column, "line": line }
            }
        });
    }
    return errors;
}
// 03
function lintWarningWhoFirst(firstBlock, errors, str) {
    if(!firstBlock) {
        let line, column;
        str.split('\n').forEach((item, index) => {
            if(item.indexOf('button') !== -1) {
                line = index + 1;
                column = item.length;
            }
        });
        errors.push({
            "code": "WARNING.INVALID_BUTTON_POSITION",
            "error": "Блок button в блоке warning не может находиться перед блоком placeholder",
            "location": {
                "start": { "column": 1, "line": line },
                "end": { "column": column, "line": line }
            }
        });
    }
    return errors;
}
// 04
function lintWarningPlaceholder(placeholder, errors, str) {
    let size = placeholder.mods.size;
    let line, column;

    if(size !== 's' && size !== 'm' && size !== 'l') {
        str.split('\n').forEach((item, index) => {
            if(item.indexOf('placeholder') !== -1) {
                line = index + 1;
                column = item.length;
            }
        });
        errors.push({
            "code": "WARNING.INVALID_PLACEHOLDER_SIZE",
            "error": "Допустимые размеры для блока placeholder в блоке warning (значение модификатора size): s, m, l",
            "location": {
                "start": { "column": 1, "line": line },
                "end": { "column": column, "line": line }
            }
        });
    }
    return errors;
}
