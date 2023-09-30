

const Cover =  ({coverImg, title}) => {
    return (
      <div
        className="hero h-[65vh] mb-5 "
        style={{
          backgroundImage:
            `url(${coverImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-black p-10 bg-opacity-60">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Cover;