// src/components/PokemonDetails.jsx

const PokemonDetails = (props) => {
    console.log(props); // Always verify that any props are being passed correctly!
    return (
      <>
        <h2>Pokemon Details</h2>
        <dl>
          <dt>Weight:</dt>
          <dd></dd>
          <dt>Height:</dt>
          <dd></dd>
        </dl>
      </>
    );
};
  
export default PokemonDetails;
  