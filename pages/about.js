import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
    <div>
        <Head>
            <title>About | Halfundecided Store</title>
        </Head>
        <h1>About page</h1>
    </div>
);

export default withLayout(About); /* Calling the function with About component */