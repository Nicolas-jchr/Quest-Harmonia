import { Link, useLoaderData } from "react-router-dom";

import ProgramList from "../components/ProgramList";

function ProgramDetails() {
  const program = useLoaderData();

  return (
    <>
      <h1>{program.title}</h1>
      <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
      <ProgramList programs={program.title} />
    </>
  );
}

export default ProgramDetails;
