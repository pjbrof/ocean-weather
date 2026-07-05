import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from '../../services/buoys';
import Checkbox from './Checkbox';

import "./Filters.css";

const Filters = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  const buoys = useSelector((state) => state.filter.buoys);

  const handleWaterTemp = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const toggleBuoys = (label, active) => {
    console.log('label?', label);
    console.log('active?', active);
  };

  return (
    <>
      <div className="filters shadow border border-gray-200 bg-white">
        <div className="p-2 border-b border-gray-200 sm:px-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Filters
          </h3>
        </div>
        <div className="px-4 py-4">
          <fieldset className="space-y-5">
            <legend className="sr-only">Filters</legend>
            <Checkbox label="Buoys" onChange={(label, active) => toggleBuoys(label, active)} />
            <Checkbox label="BuoyCAM" description="has buoy camera equipped." onChange={(label, active) => toggleBuoys(label, active)} />
            <Checkbox label="Boats" onChange={(label, active) => toggleBuoys(label, active)} />
            <div>
              <label
                htmlFor="waterTemp"
                className="block text-sm font-medium text-gray-700"
              >
                Water Temperature
              </label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="10"
                step="1"
                onChange={(e) => {
                  handleWaterTemp(e);
                }}
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      </div>
    </>
  );
};

export default Filters;
