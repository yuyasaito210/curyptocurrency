import React from "react";
import { MDBDataTable, MDBTableHead, MDBTableBody } from "mdbreact";
import { Container, Tabs, Tab, ThemeProvider } from "react-bootstrap";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

class DatatablePage extends React.Component {
  state = {
    favourite: [],
    data: {
      columns: [
        {
          label: "Favourite",
          field: "fav",
          sort: "asc",
          width: 50
        },
        {
          label: "",
          field: "fav",
          sort: "asc",
          width: 0
        },
        {
          label: "Pair",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Last Price",
          field: "position",
          sort: "asc",
          width: 270
        },
        {
          label: "24h change",
          field: "office",
          sort: "asc",
          width: 200
        },
        {
          label: "Market cap",
          field: "age",
          sort: "asc",
          width: 100
        },
        {
          label: "Markets",
          field: "date",
          sort: "asc",
          width: 150
        },
        {
          label: "24h Volume",
          field: "salary",
          sort: "asc",
          width: 100
        }
      ],
      rows: [
        {
          fav: false,
          name: "Tiger",
          position: "System Architect",
          office: "Edinburgh",
          age: "61",
          date: "2011/04/25",
          salary: "$320"
        },
        {
          fav: true,
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          date: "2011/07/25",
          salary: "$170"
        },
        {
          fav: false,
          name: "Ashton Cox",
          position: "Junior Technical Author",
          office: "San Francisco",
          age: "66",
          date: "2009/01/12",
          salary: "$86"
        },
        {
          fav: false,
          name: "Cedric Kelly",
          position: "Senior Javascript Developer",
          office: "Edinburgh",
          age: "22",
          date: "2012/03/29",
          salary: "$433"
        },
        {
          fav: false,
          name: "Airi Satou",
          position: "Accountant",
          office: "Tokyo",
          age: "33",
          date: "2008/11/28",
          salary: "$162"
        },
        {
          fav: false,
          name: "Brielle Williamson",
          position: "Integration Specialist",
          office: "New York",
          age: "61",
          date: "2012/12/02",
          salary: "$372"
        },
        {
          fav: false,
          name: "Herrod Chandler",
          position: "Sales Assistant",
          office: "San Francisco",
          age: "59",
          date: "2012/08/06",
          salary: "$137"
        },
        {
          fav: false,
          name: "Rhona Davidson",
          position: "Integration Specialist",
          office: "Tokyo",
          age: "55",
          date: "2010/10/14",
          salary: "$327"
        },
        {
          fav: false,
          name: "Colleen Hurst",
          position: "Javascript Developer",
          office: "San Francisco",
          age: "39",
          date: "2009/09/15",
          salary: "$205"
        },
        {
          fav: false,
          name: "Sonya Frost",
          position: "Software Engineer",
          office: "Edinburgh",
          age: "23",
          date: "2008/12/13",
          salary: "$103"
        },
        {
          fav: false,
          name: "Jena Gaines",
          position: "Office Manager",
          office: "London",
          age: "30",
          date: "2008/12/19",
          salary: "$90"
        },
        {
          fav: false,
          name: "Quinn Flynn",
          position: "Support Lead",
          office: "Edinburgh",
          age: "22",
          date: "2013/03/03",
          salary: "$342"
        },
        {
          fav: false,
          name: "Charde Marshall",
          position: "Regional Director",
          office: "San Francisco",
          age: "36",
          date: "2008/10/16",
          salary: "$470"
        },
        {
          fav: false,
          name: "Haley Kennedy",
          position: "Senior Marketing Designer",
          office: "London",
          age: "43",
          date: "2012/12/18",
          salary: "$313"
        },
        {
          fav: false,
          name: "Tatyana Fitzpatrick",
          position: "Regional Director",
          office: "London",
          age: "19",
          date: "2010/03/17",
          salary: "$385"
        },
        {
          fav: false,
          name: "Michael Silva",
          position: "Marketing Designer",
          office: "London",
          age: "66",
          date: "2012/11/27",
          salary: "$198"
        },
        {
          fav: false,
          name: "Paul Byrd",
          position: "Chief Financial Officer (CFO)",
          office: "New York",
          age: "64",
          date: "2010/06/09",
          salary: "$725"
        },
        {
          fav: false,
          name: "Gloria Little",
          position: "Systems Administrator",
          office: "New York",
          age: "59",
          date: "2009/04/10",
          salary: "$237"
        },
        {
          fav: false,
          name: "Bradley Greer",
          position: "Software Engineer",
          office: "London",
          age: "41",
          date: "2012/10/13",
          salary: "$132"
        },
        {
          fav: false,
          name: "Dai Rios",
          position: "Personnel Lead",
          office: "Edinburgh",
          age: "35",
          date: "2012/09/26",
          salary: "$217"
        },
        {
          fav: false,
          name: "Jenette Caldwell",
          position: "Development Lead",
          office: "New York",
          age: "30",
          date: "2011/09/03",
          salary: "$345"
        },
        {
          fav: false,
          name: "Yuri Berry",
          position: "Chief Marketing Officer (CMO)",
          office: "New York",
          age: "40",
          date: "2009/06/25",
          salary: "$675"
        },
        {
          fav: false,
          name: "Caesar Vance",
          position: "Pre-Sales Support",
          office: "New York",
          age: "21",
          date: "2011/12/12",
          salary: "$106"
        },
        {
          fav: false,
          name: "Doris Wilder",
          position: "Sales Assistant",
          office: "Sidney",
          age: "23",
          date: "2010/09/20",
          salary: "$85"
        },
        {
          fav: false,
          name: "Angelica Ramos",
          position: "Chief Executive Officer (CEO)",
          office: "London",
          age: "47",
          date: "2009/10/09",
          salary: "$1"
        },
        {
          fav: false,
          name: "Gavin Joyce",
          position: "Developer",
          office: "Edinburgh",
          age: "42",
          date: "2010/12/22",
          salary: "$92"
        },
        {
          fav: false,
          name: "Jennifer Chang",
          position: "Regional Director",
          office: "Singapore",
          age: "28",
          date: "2010/11/14",
          salary: "$357"
        },
        {
          fav: false,
          name: "Brenden Wagner",
          position: "Software Engineer",
          office: "San Francisco",
          age: "28",
          date: "2011/06/07",
          salary: "$206"
        },
        {
          fav: false,
          name: "Fiona Green",
          position: "Chief Operating Officer (COO)",
          office: "San Francisco",
          age: "48",
          date: "2010/03/11",
          salary: "$850"
        },
        {
          fav: false,
          name: "Shou Itou",
          position: "Regional Marketing",
          office: "Tokyo",
          age: "20",
          date: "2011/08/14",
          salary: "$163"
        },
        {
          fav: false,
          name: "Michelle House",
          position: "Integration Specialist",
          office: "Sidney",
          age: "37",
          date: "2011/06/02",
          salary: "$95"
        },
        {
          fav: false,
          name: "Suki Burks",
          position: "Developer",
          office: "London",
          age: "53",
          date: "2009/10/22",
          salary: "$114"
        },
        {
          fav: false,
          name: "Prescott Bartlett",
          position: "Technical Author",
          office: "London",
          age: "27",
          date: "2011/05/07",
          salary: "$145"
        },
        {
          fav: false,
          name: "Gavin Cortez",
          position: "Team Leader",
          office: "San Francisco",
          age: "22",
          date: "2008/10/26",
          salary: "$235"
        },
        {
          fav: false,
          name: "Martena Mccray",
          position: "Post-Sales support",
          office: "Edinburgh",
          age: "46",
          date: "2011/03/09",
          salary: "$324"
        },
        {
          fav: false,
          name: "Unity Butler",
          position: "Marketing Designer",
          office: "San Francisco",
          age: "47",
          date: "2009/12/09",
          salary: "$85"
        },
        {
          fav: false,
          name: "Howard Hatfield",
          position: "Office Manager",
          office: "San Francisco",
          age: "51",
          date: "2008/12/16",
          salary: "$164"
        },
        {
          fav: false,
          name: "Hope Fuentes",
          position: "Secretary",
          office: "San Francisco",
          age: "41",
          date: "2010/02/12",
          salary: "$109"
        },
        {
          fav: false,
          name: "Vivian Harrell",
          position: "Financial Controller",
          office: "San Francisco",
          age: "62",
          date: "2009/02/14",
          salary: "$452"
        },
        {
          fav: false,
          name: "Timothy Mooney",
          position: "Office Manager",
          office: "London",
          age: "37",
          date: "2008/12/11",
          salary: "$136"
        },
        {
          fav: false,
          name: "Jackson Bradshaw",
          position: "Director",
          office: "New York",
          age: "65",
          date: "2008/09/26",
          salary: "$645"
        },
        {
          fav: false,
          name: "Olivia Liang",
          position: "Support Engineer",
          office: "Singapore",
          age: "64",
          date: "2011/02/03",
          salary: "$234"
        },
        {
          fav: false,
          name: "Bruno Nash",
          position: "Software Engineer",
          office: "London",
          age: "38",
          date: "2011/05/03",
          salary: "$163"
        },
        {
          fav: false,
          name: "Sakura Yamamoto",
          position: "Support Engineer",
          office: "Tokyo",
          age: "37",
          date: "2009/08/19",
          salary: "$139"
        },
        {
          fav: false,
          name: "Thor Walton",
          position: "Developer",
          office: "New York",
          age: "61",
          date: "2013/08/11",
          salary: "$98"
        },
        {
          fav: false,
          name: "Finn Camacho",
          position: "Support Engineer",
          office: "San Francisco",
          age: "47",
          date: "2009/07/07",
          salary: "$87"
        },
        {
          fav: false,
          name: "Serge Baldwin",
          position: "Data Coordinator",
          office: "Singapore",
          age: "64",
          date: "2012/04/09",
          salary: "$138"
        },
        {
          fav: false,
          name: "Zenaida Frank",
          position: "Software Engineer",
          office: "New York",
          age: "63",
          date: "2010/01/04",
          salary: "$125"
        },
        {
          fav: false,
          name: "Zorita Serrano",
          position: "Software Engineer",
          office: "San Francisco",
          age: "56",
          date: "2012/06/01",
          salary: "$115"
        },
        {
          fav: false,
          name: "Jennifer Acosta",
          position: "Junior Javascript Developer",
          office: "Edinburgh",
          age: "43",
          date: "2013/02/01",
          salary: "$75"
        },
        {
          fav: false,
          name: "Cara Stevens",
          position: "Sales Assistant",
          office: "New York",
          age: "46",
          date: "2011/12/06",
          salary: "$145"
        },
        {
          fav: false,
          name: "Hermione Butler",
          position: "Regional Director",
          office: "London",
          age: "47",
          date: "2011/03/21",
          salary: "$356"
        },
        {
          fav: false,
          name: "Lael Greer",
          position: "Systems Administrator",
          office: "London",
          age: "21",
          date: "2009/02/27",
          salary: "$103"
        },
        {
          fav: false,
          name: "Jonas Alexander",
          position: "Developer",
          office: "San Francisco",
          age: "30",
          date: "2010/07/14",
          salary: "$86"
        },
        {
          fav: false,
          name: "Shad Decker",
          position: "Regional Director",
          office: "Edinburgh",
          age: "51",
          date: "2008/11/13",
          salary: "$183"
        },
        {
          fav: false,
          name: "Michael Bruce",
          position: "Javascript Developer",
          office: "Singapore",
          age: "29",
          date: "2011/06/27",
          salary: "$183"
        },
        {
          fav: false,
          name: "Donna Snider",
          position: "Customer Support",
          office: "New York",
          age: "27",
          date: "2011/01/25",
          salary: "$112"
        }
      ]
    }
  };

  // setFavourite = () => {
  //   console.log("Set State");
  //   this.setState({
  //     favourite: this.state.data.rows.filter(d => {
  //       return d.fav;
  //     })
  //   });
  // };

  // tableBtn = e => {
  //   // console.log(i.toString().split("-"));
  //   if (e.target.id.split("-")[0] === "F") {
  //     let id = e.target.id.split("-")[1];
  //     console.log("dsfdf", this.state.data.rows[id].fav);
  //     this.state.data.rows[id].fav = !this.state.data.rows[id].fav;
  //     console.log("dsfdf", this.state.data.rows[id].fav);
  //     console.log(this.state.data.rows);
  //     this.setFavourite();
  //   } else if (e.target.id !== "") {
  //     console.log("Redirect");
  //   }
  // };

  tableClick = e => {
    const id = e.target.id.split("-");
    // console.log(e.target);
    // console.log(e.target.parentElement.firstChild.id.split("-"));
    // return;
    if (id.length === 2) {
      this.setState({
        data: {
          columns: [...this.state.data.columns],
          rows: this.state.data.rows.map((elem, index) => {
            if (index === parseInt(id[1])) {
              console.log(elem);
              return {
                ...elem,
                fav: !elem.fav
              };
            } else {
              return elem;
            }
          })
        }
      });
    }
    // this.render();
  };

  render() {
    let newData = {
      columns: [...this.state.data.columns],
      rows: [...this.state.data.rows]
    };
    newData.rows = newData.rows.map((elem, index) => {
      return {
        favourite: elem.fav ? (
          <IoIosStar id={"T-" + index} />
        ) : (
          <IoIosStarOutline id={"T-" + index} />
        ),
        ...elem
      };
    });
    // let bnb = this.state.data;
    // let btc = this.state.data;
    // let alts = this.state.data;
    // let rows = [];
    // this.state.data.rows.forEach((d, i) => {
    //   let data = {
    //     favourite: !d.fav ? (
    //       <IoIosStarOutline id={"F-" + i} />
    //     ) : (
    //       <IoIosStar id={"F-" + i} />
    //     ),
    //     name: <div id={"I-" + i}>{d.name}</div>,
    //     position: <div id={"I-" + i}>{d.position}</div>,
    //     office: <div id={"I-" + i}>{d.office}</div>,
    //     age: <div id={"I-" + i}>{d.age}</div>,
    //     date: <div id={"I-" + i}>{d.date}</div>,
    //     salary: <div id={"I-" + i}>{d.salary}</div>,
    //     fav: d.fav
    //   };
    //   rows.push(data);
    // });
    // btc.rows = rows;

    return (
      <Container>
        {/* <MDBDataTable hover data={data} /> */}

        <Tabs defaultActiveKey="bnb" id="uncontrolled-tab-example">
          <Tab eventKey="fav" title="Favourite">
            <MDBDataTable hover data={newData} />
          </Tab>
          <Tab eventKey="bnb" title="BNB Market">
            <MDBDataTable hover data={newData} onClick={this.tableClick} />
          </Tab>
          <Tab eventKey="btc" title="BTC Market">
            <MDBDataTable hover data={newData} />
          </Tab>
          <Tab eventKey="alts" title="ALTS Market">
            <MDBDataTable hover data={newData} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default DatatablePage;
