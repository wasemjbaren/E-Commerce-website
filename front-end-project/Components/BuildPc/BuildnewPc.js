import React, { useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from 'react-bootstrap';
import SubTiltle from '../../Components/Uitily/SubTiltle';
import { Link } from 'react-router-dom';
import { RamsInStore, MotherBoardsInStore, CoresInStore } from './PartsItems';

const BuildnewPc = () => {
  const [expanded, setExpanded] = useState(false);
  const [choosenItem, setChoosenItem] = useState('');
  const [choosenItem1, setChoosenItem1] = useState('');
  const [choosenItem2, setChoosenItem2] = useState('');

  const [fitItems, setfitItems] = useState('');
  const [fitItems1, setfitItems1] = useState('');
  const [fitItems2, setfitItems2] = useState('');
  const [AllfitItems, setAllfitItems] = useState([]);

  const [ProductsName, setProductsName] = useState([
    'MotherBoards',
    'RAM',
    'Cores',
  ]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    console.log(fitItems);
  }, [fitItems]);

  const handleClickMotherboard = (panel, panelFit) => {
    setfitItems(panelFit);
    setChoosenItem(panel);

    setExpanded(false);
  };

  const checkFit = () => {
    if (fitItems !== fitItems1)
      alert('please change RAM, not fit with parts choosen');
  };
  const handleClickRam = (panel, panelFit) => {
    setChoosenItem1(panel);
    setfitItems1(panelFit);
    console.log(fitItems1);
    checkFit();
    setExpanded(false);
  };
  const handleClickCores = (panel, panelFit) => {
    setChoosenItem2(panel);
    setfitItems2(panelFit);
    setExpanded(false);
  };

  const printClickedItems = () => {
    console.log(choosenItem);
    console.log(fitItems);
    console.log(choosenItem1);
    console.log(fitItems1);
    console.log(choosenItem2);
    console.log(fitItems2);

    alert('successfully build');

    setAllfitItems([]);
  };

  const casesItem = (i) => {
    switch (i) {
      case 0:
        return MotherBoardsInStore.map((boards, j) => {
          return (
            <div>
              <label>
                <input
                  type="radio"
                  name="aa"
                  value={boards.title}
                  className="card-input-element"
                />

                <div className="card card-default card-input ">
                  <div id="nameItem" className="card-header">
                    {boards.title}
                  </div>
                  <div className=" justify-content-between card-body d-flex flex-row py-2 ">
                    <img className="img-item" src={boards.img} alt="ss"></img>
                    <div>{boards.describtion}</div>
                    <div className=" px-2 ">
                      323$
                      <button
                        key={j}
                        className="btn btn-success"
                        onClick={() => {
                          handleClickMotherboard(boards.title, boards.fitPart);
                        }}
                      >
                        {' '}
                        choose{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          );
        });

      case 1:
        return RamsInStore.map((rams, j) => {
          return (
            <div>
              <label>
                <input
                  type="radio"
                  name="aa"
                  value={rams.title}
                  className="card-input-element"
                />

                <div className="card card-default card-input ">
                  <div id="nameItem" className="card-header">
                    {rams.title}
                  </div>
                  <div className=" justify-content-between card-body d-flex flex-row py-2 ">
                    <img className="img-item" src={rams.img} alt="ss"></img>
                    <div>{rams.describtion}</div>
                    <div className=" px-2 ">
                      323$
                      <button
                        key={j}
                        className="btn btn-success"
                        onClick={() => {
                          handleClickRam(rams.title, rams.fitPart);
                        }}
                      >
                        {' '}
                        choose{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          );
        });

      case 2:
        return CoresInStore.map((cores, j) => {
          return (
            <div>
              <label>
                <input
                  type="radio"
                  name="aa"
                  value={cores.title}
                  className="card-input-element"
                />

                <div className="card card-default card-input ">
                  <div id="nameItem" className="card-header">
                    {cores.title}
                  </div>
                  <div className=" justify-content-between card-body d-flex flex-row py-2 ">
                    <img className="img-item" src={cores.img} alt="ss"></img>
                    <div>{cores.describtion}</div>
                    <div className=" px-2 ">
                      323$
                      <button
                        key={j}
                        className="btn btn-success"
                        onClick={() => {
                          handleClickCores(cores.title, cores.fitPart);
                        }}
                      >
                        choose
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          );
        });

      default:
        return <div>no data</div>;
    }
  };

  return (
    <Container>
      <SubTiltle title="הרכבת מחשב " />

      {/* ============================== Accordion-1 =================================*/}

      <div>
        <Accordion
          expanded={expanded === `panel${0}`}
          onChange={handleChange(`panel${0}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {ProductsName[0]}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {choosenItem}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{casesItem(0)}</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === `panel${1}`}
          onChange={handleChange(`panel${1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {ProductsName[1]}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {choosenItem1}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{casesItem(1)}</AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === `panel${2}`}
          onChange={handleChange(`panel${2}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {ProductsName[2]}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {choosenItem2}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{casesItem(2)}</AccordionDetails>
        </Accordion>
      </div>
      <button className="btn-danger" onClick={printClickedItems}>
        show me choosen items
      </button>
    </Container>
  );
};

export default BuildnewPc;
