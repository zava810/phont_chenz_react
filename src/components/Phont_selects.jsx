import React from 'react';
// import styled from 'styled-components';

const data = {
  langs: [
    { name: "hinDi", fonts: ["hin58d", "hin58md", "hin58db1", "hin58e"] },
    { name: "Tmil", fonts: ["tmil58d", "tmil58", "tmil58db1", "tmil58b1"] }
  ]
};
const Phont_selects = () => {
  const [sel_bhasa, setsel_bhasa] = React.useState();
  const [sel_phont, setsel_phont] = React.useState();
  const availablefonts = data.langs.find(
    (s) => s.name === sel_bhasa
  );
  const chenzfont=(selektid_phont) => {
    setsel_phont(selektid_phont);
    document.querySelectorAll('*').forEach(function(node) {
      node.style.fontFamily = selektid_phont;
    }
  )};  
  return (
    <>
      <div className='child'>
        <select value={sel_bhasa}
          onChange={(e) => setsel_bhasa(e.target.value)}
        >
          <option>bhasa?</option>
          {data.langs.map((value, key) => {
            return ( <option value={value.name} key={key}> {value.name} </option> );
          })}
        </select>
      </div>
      <div className='child'>
        <select value={sel_phont}
          onChange={(e) => chenzfont(e.target.value)}
        >
          <option>phont?</option>
          {availablefonts?.fonts.map((e, key) => {
            return ( <option value={e.name} key={key}> {e} </option> );
          })}
        </select>
      </div>
    </>
  )
}
// const Main_div = styled.div`
// width: 160px;
// display: flex;
// flex-direction: column;
// .child {
//   /* max-width: 30px; */
//   flex: 1;
// }
// `;
export default Phont_selects