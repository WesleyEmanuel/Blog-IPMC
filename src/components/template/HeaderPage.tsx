import ipmc_logo from "../../assets/images/logo_ipmc.png";

export const HeaderPage = () => {
  return (
    <div className="text-center text-3xl shadow">
      <img
        src={ipmc_logo}
        alt="logo ipmc"
        className="mx-auto w-[8rem] m-[-2rem] "
      />
    </div>
  );
};
