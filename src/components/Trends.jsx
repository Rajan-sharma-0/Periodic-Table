import React from 'react'
import ElectronegativityGraph from "./Electronegativity";
import { atomicRadii, electronegativity, ionizationData } from "./PeriodicTable";
import Typewriter from "typewriter-effect";
import MeltandBoil from './MeltandBoil';
import { meltingPoint } from './PeriodicTable';
import AtomicRadii from './AtomicRadii';
import IonizationEnergyBarGraph from './Ionizaton';


const Trends = () => {
  return (
    <div className='h-full'>
      <div className="chart-container">
        <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-4 ml-10 text-center sm:text-left px-4  text-yellow-400">
          <Typewriter
            options={{
              strings: ["Electronegativity of Elements"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>
        <ElectronegativityGraph data={electronegativity} />
      </div>
      <div>
        <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-4 ml-10 text-center sm:text-left px-4  text-yellow-400">
          <Typewriter
            options={{
              strings: ["Melting and Boiling Points"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>
        <MeltandBoil data={meltingPoint} />
      </div>

      <div className="App">
        <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-4 ml-10 text-center sm:text-left px-4 text-yellow-400">
          <Typewriter
            options={{
              strings: ["Atomic Radius HeatMap"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>      
        <AtomicRadii atomicRadii={atomicRadii} />  
      </div>

      <div>
      <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-4 ml-10 text-center sm:text-left px-4 text-yellow-400">
          <Typewriter
            options={{
              strings: ["Ionization Energy"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>   
      <IonizationEnergyBarGraph ionizationData={ionizationData} />;
      </div>

    </div>
  )
}

export default Trends;