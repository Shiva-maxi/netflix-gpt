// import React from "react";
// import { useSelector } from "react-redux";
 
// import Movielist from "./Movielist";
// const Gptmoviesuggestions = () => {
//   const { movienames, movieresults } = useSelector((store) => store.gpt);
//   if (!movienames) {
//     return null;
//   }
//   return (
//     <div  className="p-4 m-4 bg-black text-white bg-opacity-90 relative">
//       <div>
//         {movienames.map((movie, ind) => {
//           <Movielist title={movie} key={movie} movies={movieresults[ind]} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Gptmoviesuggestions;
import React from "react";
import { useSelector } from "react-redux";
 import Movielist from "./Movielist";

const  GptMovieSuggestions=() =>{
    const { movienames, movieresults } = useSelector((store) => store.gpt);
    if (!movienames) return null;

    return (
        <div className="bg-black m-4 p-4">
            <div>
                {movienames.map((movieName, index) => (
                    <Movielist
                        key={movieName}
                        title={movieName}
                        movies={movieresults[index]}
                    />
                ))}
            </div>
        </div>
    );
}

export default GptMovieSuggestions