interface ICategory {
	  [key: string]: ISite;
}

interface ISite {
	  [key: string]: ILinks;
}

interface ILinks {
    url:   string;
    name:  string;
}


const data : ICategory = {
	"World": {
		"ta": {
			"url": "https://www.theatlantic.com/world/",
			"name": "The Atlantic"
		},
		"fa": {
			"url": "https://www.foreignaffairs.com/",
			"name": "Foreign Affairs"
		},
		"efr": {
			"url": "https://www.ecfr.eu/",
			"name": "ECFR"
		}
	},
	"Dev": {
		"hn": {
			"url": "https://news.ycombinator.com/",
			"name": "HackerNews"
		},
		"L": {
			"url": "https://lobste.rs/",
			"name": "Lobsters"
		},
		"dv": {
			"url": "https://dev.to/",
			"name": "dev.to"
		}
	},
	"Econ": {
		"ft": {
			"url": "https://www.ft.com",
			"name": "Financial Times"
		},
		"bb": {
			"url": "https://www.bloomberg.com/europe",
			"name": "Bloomberg"
		},
		"wst": {
			"url": "https://www.wsj.com/",
			"name": "Wall Street Journal"
		}
	},
	"Science": {
		"w": {
			"url": "https://www.wired.com",
			"name": "Wired Sci"
		},
		"n": {
			"url": "https://www.nature.com/",
			"name": "Nature"
		},
		"sc": {
			"url": "http://www.sciencemag.org/",
			"name": "Science Mag"
		},
		"sa": {
			"url": "https://www.scientificamerican.com/",
			"name": "Scientific American"
		}
	}
}
