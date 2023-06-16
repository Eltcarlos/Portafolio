import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ time, type, place, info, pl }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;{" "}
          {pl && (
            <a target="_blank" className="text-primaryDark dark:text-primary capitalize">
              {" "}
              @{pl}
            </a>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Educación</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            type="Ingeniero de sistemas"
            time="2019-Present | Univeridad Cooperativa de Colombia"
            place="Cursos relevantes incluidos Estructuras de datos y algoritmos"
            info="Sistemas"
          />
          <Details
            type="Curso de React Experto"
            time="2021 | Plataforma de Udemy"
            place="Cursos Avanzado de react, Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers..."
            info="Fernando Herrera"
            pl="Udemy"
          />
          <Details
            type="Curso de Docker, Compose y Swarm"
            time="2023 | Plataforma de Udemy"
            place="Aprende a usar Docker desde lo más básico hasta llegar a Docker Compose, Docker Swarm y Kubernetes"
            info="Apasoft Training"
            pl="Udemy"
          />
          <Details
            type="Curso de Python"
            time="2023 | Plataforma de Udemy"
            place="Machine Learning, Data Science, Django, IGU, Juegos y más!"
            info="Federico Garay"
            pl="Udemy"
          />
          <Details
            type="Curso de Machine Learning"
            time="2023 | Plataforma de Udemy"
            place="Aprende a crear algoritmos de Machine Learning en Python y R con expertos en Data Science. Con código fuente incluido!"
            info="SuperDataScience"
            pl="Udemy"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
