export default function Sandbox({ data }) {
    return (
      <div>
        <h1>Hello {data}</h1>
      </div>
    );
  }
    
  export function getServerSideProps() {
    return {
      props: { data: "world" },
    }
  }
  