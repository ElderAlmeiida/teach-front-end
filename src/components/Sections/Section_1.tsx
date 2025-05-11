import { PlayCircle } from "lucide-react";

const Section_1 = () => {
  return (
    <section className="w-full bg-white pt-24 pb-24 px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

      {/* Left Side */}
      <div className="flex-1 max-w-md md:max-w-lg">
        <h1 className="text-xxl font-bold text-dark-blue mb-6 leading-tight">
          <span className="inline-block relative">
            <img
              src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746910043/Vector_14_b6wsqo.png"
              alt="Marcação laranja"
              className="absolute inset-x-0 bottom-1 w-full h-6 z-0"
            />
            <span className="relative z-10">Teach</span>
          </span>{" "}
          students worldwide
        </h1>
        <p className="text-dark-blue text-l mb-6 leading-relaxed">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.
          Nunc ipsum est pellentesque turpis ultricies.
        </p>
        <div className="flex items-center gap-4 mb-6">
          <button className="bg-orange w-60 h-16 text-l text-white font-semibold px-6 py-3 rounded-md hover:bg-dark-blue transition">
            Sign Up Now
          </button>
          <button className="flex items-center text-blue font-medium hover:underline">
            <PlayCircle className="w-5 h-5 mr-2" />
            View Demo
          </button>
        </div>
        {/* Trusted by leading companies */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-12">
            <div className="text-xs text-gray-400 text-center md:text-left">
              Trusted by <br /> leading companies
            </div>
            <div className="flex gap-12 items-center justify-center md:justify-start">
              <img src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746931060/Black_and_White_Collection_3_wh34al.png" alt="Logo 1" className="w-6 h-6" />
              <img src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746931060/Black_and_White_Collection_2_sqsult.png" alt="Logo 2" className="w-6 h-6" />
              <img src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746931060/Black_and_White_Collection_11_koc5ae.png" alt="Logo 3" className="w-6 h-6" />
              <img src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746931059/Black_and_White_Collection_20_s93nn6.png" alt="Logo 4" className="w-6 h-6" />
              <img src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746931059/Black_and_White_Collection_1_o5w3ij.png" alt="Logo 5" className="w-6 h-6" />
            </div>
          </div>

      </div>

      {/* Right Side - Imagem única com falas embutidas */}
      <div className="flex-1 relative w-650px] items-center justify-center">
        <div className="relative w-full h-full">
          <img
            src="https://res.cloudinary.com/diuvgclpk/image/upload/v1746930271/Group_50_1_qrv35a.png"
            alt="Teacher and Student"
            className="w-full rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_1;


