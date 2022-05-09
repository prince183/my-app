import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Justine Calma",
      title: "Why fossil fuel companies see green in Bitcoin mining projects",
      description:
        "ExxonMobil and other fossil fuel companies have turned to Bitcoin mining to address a gas problem. But their plans come with risks.",
      url: "https://www.theverge.com/2022/5/4/23055761/exxonmobil-cryptomining-bitcoin-methane-gas",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/BZdljrBbt8tBl6oCCnckcDKqe6g=/0x90:4608x2503/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23435975/1240300988.jpg",
      publishedAt: "2022-05-04T12:00:00Z",
      content:
        "A Bitcoin mining site powered by otherwise lost gas from an oil well near Linden, Texas, on April 4th, 2022. | Photo by FRANCOIS PICARD/AFP via Getty Images\r\n\n \n\n Of all the corporate climate hype fl… [+6544 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jay Peters",
      title:
        "Block and Blockstream are partnering with Tesla on an off-grid, solar-powered Bitcoin mine in Texas",
      description:
        "Block and Blockstream are partnering with Tesla on an open-source, solar-powered Bitcoin mine, the companies announced Friday. Tesla’s 3.8-megawatt Solar PV array and its 12 megawatt-hour Megapack will power the facility, and construction has started on the p…",
      url: "https://www.theverge.com/2022/4/8/23016553/block-blockstream-tesla-solar-bitcoin-mine-texas",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/OYrvaaOHBuEpdTeRO55nZnZdexs=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8937281/acastro_170726_1777_0007_v2.jpg",
      publishedAt: "2022-04-08T16:02:52Z",
      content:
        "Its set to open later this year\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by Alex Castro / The Verge\r\nBlock and Blockstream, a … [+1336 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title: "Wikipedia editors vote to block cryptocurrency donations",
      description:
        "Wikipedia editors have voted in favor of dropping cryptocurrency from the Wikimedia Foundation's donation options. As Ars Technica reports, an editor for the online encyclopedia called GorillaWarfare wrote a proposal for the foundation to stop accepting crypt…",
      url: "https://www.engadget.com/wikipedia-editors-vote-to-block-cryptocurrency-donations-113549175.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2021-07/9f595ce0-de17-11eb-bef2-e1b1456d84ae",
      publishedAt: "2022-04-14T11:35:49Z",
      content:
        "Wikipedia editors have voted in favor of dropping cryptocurrency from the Wikimedia Foundation's donation options. As Ars Technica reports, an editor for the online encyclopedia called GorillaWarfare… [+1577 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Matt Novak",
      title:
        "Warren Buffett Says He Wouldn't Take All the Bitcoin in the World for $25",
      description:
        "Warren Buffett has always been a bitcoin skeptic. But the billionaire investor had his most harsh words yet for the cryptocurrency over the weekend. Buffett made it clear that his opposition to crypto has nothing to do with whether people can make money tradi…",
      url: "https://gizmodo.com/warren-buffett-all-bitcoin-world-25-dollars-assets-valu-1848866967",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bbc389f90510758bf8f4131a7e2cbacd.png",
      publishedAt: "2022-05-02T11:30:00Z",
      content:
        "Warren Buffett has always been a bitcoin skeptic. But the billionaire investor had his most harsh words yet for the cryptocurrency over the weekend. Buffett made it clear that his opposition to crypt… [+2297 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Lauren Leffer",
      title:
        "Fidelity Wants to Include Bitcoin in 401(k) Plans; Elizabeth Warren and the Labor Department Have Concerns",
      description:
        "The nation's largest retirement plan provider is getting pushback for allowing investors to put a portion of their savings into cryptocurrency.",
      url: "https://gizmodo.com/fidelity-wants-bitcoin-added-to-401-k-retirement-plans-1848885502",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2413ade0375c0f5b3affe4029f35315c.jpg",
      publishedAt: "2022-05-05T18:10:00Z",
      content:
        "If youve ever felt like introducing some Vegas-style odds into your retirement plan, youre finally in luck.\r\nLast week, Fidelity Investments announced that it would allow investors to put part of the… [+3239 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Jon Fingas",
      title:
        "US Treasury issues first-ever sanctions against a cryptocurrency mixer",
      description:
        "Cryptocurrency mixers are sometimes used to help online criminals launder their stolen money by hiding its true origins, and the US Treasury is now ready to clamp down on them when hostile governments are involved. The department has issued its first sanction…",
      url: "https://www.engadget.com/us-treasury-sanctions-virtual-currency-mixer-north-korea-203502517.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2021-11/0db21000-4246-11ec-a8de-edfca39c0e00",
      publishedAt: "2022-05-06T20:35:02Z",
      content:
        "Cryptocurrency mixers are sometimes used to help online criminals launder their stolen money by hiding its true origins, and the US Treasury is now ready to clamp down on them when hostile government… [+1432 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Cryptoverse: 10 billion reasons bitcoin could become a reserve currency - Reuters",
      description:
        "A crypto platform's pledge to amass $10 billion worth of bitcoin to back its own \"stablecoin\" is firing up the market. It's part of a wider movement to crown bitcoin as the reserve currency of a new age.",
      url: "https://www.reuters.com/business/cryptoverse-10-billion-reasons-bitcoin-could-become-reserve-currency-2022-04-12/",
      urlToImage:
        "https://www.reuters.com/resizer/sJekSAyVZew4r9prtuVAPUET5ws=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O2SCLFEKTZPMLESUYUADTUAGOQ.jpg",
      publishedAt: "2022-04-12T05:15:00Z",
      content:
        "April 12 (Reuters) - A crypto platform's pledge to amass $10 billion worth of bitcoin to back its own \"stablecoin\" is firing up the market. It's part of a wider movement to crown bitcoin as the reser… [+5660 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Bitcoin entrepreneur Mow creates new company, inks El Salvador deal - Reuters",
      description:
        "Bitcoin entrepreneur Samson Mow on Thursday said he has created a new company called Jan3 focused on promoting bitcoin adoption, adding that the firm has signed a memorandum of understanding to develop digital infrastructure in El Salvador.",
      url: "https://www.reuters.com/technology/bitcoin-entrepreneur-mow-creates-new-company-inks-el-salvador-deal-2022-04-07/",
      urlToImage:
        "https://www.reuters.com/resizer/wi5YBLbMmVbe6N_0tS8zPRU6cvg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VLMVBBYF3JP4BEXCUZEOGSBQKQ.jpg",
      publishedAt: "2022-04-07T16:21:00Z",
      content:
        "MIAMI BEACH, April 7 (Reuters) - Bitcoin entrepreneur Samson Mow on Thursday said he has created a new company called Jan3 focused on promoting bitcoin adoption, adding that the firm has signed a mem… [+1360 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1
    };
  }

  async componentDidMount() {
    //Runs afer execution of the body
    let url =
      "https://newsapi.org/v2/everything?q=tesla&from=2022-04-09&sortBy=publishedAt&apiKey=b1bd8d2c1e954416b2651610269e4aa4&page=1";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
    
  }
  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-04-09&sortBy=publishedAt&apiKey=b1bd8d2c1e954416b2651610269e4aa4&page=${
      this.state.page - 1
    }`;
    
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-04-09&sortBy=publishedAt&apiKey=b1bd8d2c1e954416b2651610269e4aa4&page=${
      this.state.page + 1
    }`;
    
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
    });
    
  };

  render() {
    return (
      <div className="container my-4">
        <h2>Top Heading</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageURL={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
