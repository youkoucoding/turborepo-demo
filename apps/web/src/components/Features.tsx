import * as React from 'react';

import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';

function Product({ register }): JSX.Element {
  const [inputFeatures, setInputFeatures] = React.useState([{ featureKey: '', featureName: '' }]);
  console.warn(`🚀🦀 && file: index.tsx:7 && Product && inputFeatures:`, inputFeatures);

  const handleOnFeatureChange = (index: number, evt: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...inputFeatures];
    values[index][evt.target.name] = (evt.target as HTMLInputElement).value;
    setInputFeatures(values);
  };

  const handleAddFeature = () => {
    setInputFeatures([...inputFeatures, { featureKey: '', featureName: '' }]);
  };

  const handleRemoveFeature = (index) => {
    const values = [...inputFeatures];
    values.splice(index, 1);
    setInputFeatures(values);
  };

  return (
    <>
      <div className='col-span-12 lg:col-span-8 form-control'>
        <h3 className='label font-semibold text-lg'>Features</h3>
        <div className='w-full'>
          {inputFeatures.map((inputFeature, index) => (
            <div className='flex flex-col sm:flex-row items-start justify-between gap-3'>
              <div className='w-full'>
                <label className='label font-medium p-2 pt-0'>Feature Key</label>
                <input
                  name='featureKey'
                  className='input input-bordered w-full'
                  value={inputFeature.featureKey}
                  onChange={(e) => handleOnFeatureChange(index, e)}
                />
              </div>
              <div className='w-full'>
                <label className='label font-medium p-2 pt-0'>Feature Name</label>
                <input
                  name='featureName'
                  className='input input-bordered w-full'
                  value={inputFeature.featureName}
                  onChange={(e) => handleOnFeatureChange(index, e)}
                />
              </div>

              {/* icons */}
              <div className='flex flex-row mt-10 gap-3'>
                <button type='button' onClick={handleAddFeature} className='w-6 h-6'>
                  <PlusCircleIcon />
                </button>
                <button
                  type='button'
                  onClick={() => handleRemoveFeature(index)}
                  className='w-6 h-6'
                >
                  <MinusCircleIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="col-span-12 lg:col-span-8 form-control">
        <h3 className="label font-semibold text-lg">Features</h3>
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
            <div className="w-full">
              <label htmlFor="domain" className="label font-medium p-2 pt-0">
                Feature Key
              </label>
              <input
                id="domain1"
                className="input input-bordered w-full"
                {...register("domain")}
                readOnly
              />
            </div>
            <div className="w-full">
              <label htmlFor="plan" className="label font-medium p-2 pt-0">
                Feature Name
              </label>
              <input
                id="frontDoorName1"
                className="input input-bordered w-full"
                {...register("frontDoorName")}
                readOnly
              />
            </div>

            <div className="flex flex-row mt-10 gap-3">
              <div className="w-6 h-6">
                <PlusCircleIcon />
              </div>
              <div className="w-6 h-6">
                <MinusCircleIcon />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Product;
