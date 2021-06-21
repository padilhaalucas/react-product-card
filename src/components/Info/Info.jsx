import React from "react";

const Info = () => {
  const shoeName = (
    <div className="shoeName">
      <div className="titleAndNewContainer">
        <h1 className="big">Nike Zoom KD 12</h1>
        <span className="new">Novidade</span>
      </div>
      <h3 className="small">Tenis de corrida masculino.</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Informações do produto</h3>
      <p className="text">
        Garanta uma sessão de corrida confortável, utilizando o seu par de tenis Nike Running.
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Escolha a cor</h3>
      <div className="colors">
        <span className="color active" primary="#2175f5" color="blue"></span>
        <span className="color" primary="#f84848" color="red"></span>
        <span className="color" primary="#29b864" color="green"></span>
        <span className="color" primary="#ff5521" color="orange"></span>
        <span className="color" primary="#444" color="black"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">Escolha o tamanho</h3>
      <div className="sizes">
        <span className="size">37</span>
        <span className="size">38</span>
        <span className="size active">39</span>
        <span className="size">40</span>
        <span className="size">41</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>Adicionar
      </a>
      <div className="price">
        <i className="fas fa-euro-sign" style={{marginTop: '0.175em', marginRight: '0.25em'}}></i>
        <h1>149.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;
