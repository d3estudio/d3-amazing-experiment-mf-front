import React, { useState } from "react";

import SelectInput from "../SelectInput";
import Modal from "../../components/Modal";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import dark from "../../styles/themes/dark";

import SortAZ from "../../assets/sort.svg";
import Filter from "../../assets/filter.svg";
import Detail from "../../assets/detail.svg";

import Check from "../../assets/check.svg";
import Credit from "../../assets/credit.svg";
import Reject from "../../assets/reject.svg";

import * as S from "./styles";

const ExpensesTable = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <S.Container>
        <S.TableHeader>
          <S.LeftContent>
            <span>id</span>
            <span>data</span>
            <SelectInput title="usuário" placeholder="filtrar por nome" />
            <button type="button" className="sortAZ">
              <img
                src={SortAZ}
                alt="Ordenar em ordem crescente ou decrescente"
              />
            </button>
            <span>
              <SelectInput
                title="centro de custo"
                placeholder="filtrar por centro de custo"
              />
            </span>
            <span>
              <SelectInput
                title="categoria"
                placeholder="filtrar por categoria"
              />
            </span>
            <span>valor</span>
          </S.LeftContent>

          <S.RightContent>
            <SelectInput title="status" />
            <button type="button" className="filter">
              <img src={Filter} alt="Limpar filtros" />
            </button>
          </S.RightContent>
        </S.TableHeader>

        <S.TableBody>
          <S.Separators>
            <div />
            <div />
          </S.Separators>
          <Item />
        </S.TableBody>
      </S.Container>
    </ThemeProvider>
  );
};

export default ExpensesTable;

const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.TableItem onClick={() => setIsOpen(true)}>
        <div className="id">
          <span>#9999</span>
        </div>
        <div className="date">
          <span>08/06</span>
        </div>
        <div className="user">Maisinha dos Santos dfvdfgdfg</div>
        <div className="centerOfExpense">
          <span>Sensia</span>
        </div>
        <div className="category">
          <span>Viagem</span>
        </div>
        <div className="value">
          <span>R$122,40</span>
        </div>
        <div class="detail">
          <img src={Detail} alt="Chat icon" />
        </div>
        <div className="status">
          <button>
            <img src={Check} alt="Approve refund" />
          </button>
          <button>
            <img src={Credit} alt="Credit" />
          </button>
          <button>
            <img src={Reject} alt="Reject refund" />
          </button>
        </div>
      </S.TableItem>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
