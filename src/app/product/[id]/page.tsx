'use client'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import products from "@/products.json"
import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'
import TopDiv from '@/components/TopDiv'



export default function Example({ params }: { params: { id: string } }) {
  const product = products.sv.find((product) => product.id === Number(params.id))
  const [selectedSize, setSelectedSize] = useState(product?.size[0])
  console.log(selectedSize)
  return (
    <div className="bg-white">
      <TopDiv></TopDiv>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">

          </nav>
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product?.title}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex flex-col items-left">
              {product?.price.map((price) => (
                <div key={price.name} className="flex gap-3">
                  <p className="mt-1 text-gray-900 text-xl ">{price.name} : </p>
                  <p className="mt-1 text-gray-900 text-xl"> {price.price}</p>
                </div>
              ))}


              <div className="ml-4 border-l border-gray-300 pl-4">

                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product?.info}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-sm text-gray-500">Finns i lager</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className=" overflow-hidden rounded-lg">
            <Image width={700} height={500} src={product?.image || ''} alt={product?.title || 'image-text'} className="h-full w-full" />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Size selector */}
                <RadioGroup value={selectedSize} onChange={setSelectedSize} >
                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">Size</RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product?.size.map((s) => (
                      <RadioGroup.Option
                        as="div"
                        value={s.dim}
                        className={({ active, checked }) =>
                          classNames(
                            'relative block cursor-pointer rounded-lg border p-4 focus:outline-none',
                            {
                              'ring-2 ring-indigo-500': active,
                              'border-gray-300': !active,
                              'border-indigo-500': checked,
                            }
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                              {s.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                              {s.dim}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-indigo-500' : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-lg'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-4">
                <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                  <span>What size should I buy?</span>
                  <QuestionMarkCircleIcon
                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add to bag
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
