import React from "react";
import { Button } from "./Button";

type ProjectsProp = {
  id: number,
  img: string,
  name: string,
  description: string,
  link: string,
  demo: string,
}

export function Projects ({img, name, description, id, link, demo}: ProjectsProp) {
  return (
    <>
      <div className="flex flex-row gap-4 bg-gradient-to-t from-purple-900 to-10% border-x-2 border-purple-900/40 w-3/4 p-5 rounded-xl">
        <img src={img} alt={name} className={`${(id === 1 || id === 3) ? "hidden" : "block"} w-auto h-auto object-cover rounded-xl`} />
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl border-solid border-b-2 border-secondary">{name}</h2>
          <p className="text-2xl">{description}</p>
          <div className="flex mt-auto ml-auto mb-8 mr-8 gap-3">
            <Button><a target="_blank" href={demo}>View live demo</a></Button>
            <Button><a target="_blank" href={link}>View repository</a></Button>
          </div>
        </div>
        <img src={img} alt={name} className={`${(id === 2 || id === 4) ? "hidden" : "block"} w-auto h-auto object-cover rounded-xl`} />
      </div>
      <span className={`${(id === 4) ? "hiden" : "border-r-2 border-dotted border-purple-600 h-10"}`} />
    </>
  )
}
