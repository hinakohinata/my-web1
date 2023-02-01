
import { useState, useEffect } from "react";
import { callAPI } from "../services/API.js";
import Form from "react-bootstrap/Form";
import { Container, Row,InputGroup,Button } from "react-bootstrap";
import Posts from "../Posts.js";
// import Form from "react-bootstrap/Form";

function Home() {
    const [data, setData]= useState([]);
    const [keyword, setKeyword]= useState('');

    useEffect(()=>{
        fetchBlog();
    }, [keyword]);

    const fetchBlog =async ()=>{
        const data = await callAPI(`/blogs?search=${keyword}`,"GET");
        setData(data)
    }
    const handleOnChangeInput = (event) => {
      setKeyword(event.target.value);
    };

    return (
        <Container>
        <div>
            <h1>Home</h1>
        </div>

        <Row>
            <InputGroup >
            <input onChange={handleOnChangeInput} type="text" /><Button>Search</Button></InputGroup>
            
        <Posts keyword={keyword} posts={data} />
        </Row>
        </Container>
    )

}
export default Home;