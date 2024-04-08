'use client'
import React, {useState} from 'react'
import {Product}  from '@/app/types.js'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



export default function ProductCard({product}:{product: Product}) {
    const router = useRouter()
    return (
              <li onClick={()=> router.replace(`/product/${product.id}`)} className="inline-flex flex-col min-w-[25%] w-auto text-center shadow-lg lg:w-auto p-10">
                <div className="group relative">
                  <div className="w-full overflow-hidden rounded-md">
                    <Image
                    width={600}
                    height={400}
                      src={product.image}
                      alt={product.info}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="mt-1 font-semibold text-gray-900">
                      <a >
                        <span className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    {product.price.map((price) => (
                        <div key={price.name}>
                            <div className="flex gap-3">
                                <p className="mt-1 text-gray-900">{price.name} : </p>
                                <p className="mt-1 text-gray-900"> {price.price}</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="mt-1 text-gray-900">{price.name} : </p>
                                <p className="mt-1 text-gray-900">{price.price}</p>
                            </div>
                    </div>
                    ))}
                  </div>
                </div>
                <h4 className="sr-only">Available colors</h4>
                <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                  {product.color && product.color.map((c) => (
                    <li
                      key={c.name}
                      className="h-8 w-8 "
                      style={{ background: c.colorBg }}
                    >
                      <span className="text-xl">{c.name}</span>
                    </li>
                  ))}
                </ul>
              </li>
    )
}
