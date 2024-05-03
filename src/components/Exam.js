import "./Exam.css";
import { db } from "./db";
import { useState, useEffect } from "react";

function FormAdmin() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [books, setBooks] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        db.book.toArray().then(items => setBooks(items))
        console.log("re-render")
    }, [books.length]); // Only re-fetch when the length of books changes

    const clearForm = () => {
        setTitle("");
        setAuthor("");
        setReleaseDate("");
        setErrors({});
    }

    const save = (title, author, releaseDate) => {
        const formErrors = {};
        let hasErrors = false;

        // Perform validation
        if (!title.trim()) {
            formErrors.title = "Title is required";
            hasErrors = true;
        }

        if (!author.trim()) {
            formErrors.author = "Author is required";
            hasErrors = true;
        }

        if (!releaseDate) {
            formErrors.releaseDate = "Release date is required";
            hasErrors = true;
        }

        if (hasErrors) {
            setErrors(formErrors);
            return;
        }

        db.book.add({ title: title, author: author, releaseDate: releaseDate })
            .then(() => {
                db.book.toArray().then(items => setBooks(items))
                clearForm();
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                }, 3000);
            })
            .catch(error => console.error("Error saving book:", error));
    }

    const loadDateEdit = (id) => {
        db.book.get(id).then(item => {
            setAuthor(item.author)
            setTitle(item.title)
            setReleaseDate(item.releaseDate)
        })
    }

    const deleteItem = (id) => {
        db.book.delete(id).then(() => {
            db.book.toArray().then(items => setBooks(items))
        }).catch(error => console.error("Error deleting book:", error));
    }

    return (
        <>
            {showMessage && <div className="success-message">File saved successfully</div>}



            <h2 className="addbook">Add a new book</h2>
            <div className="book">
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
           
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            
                <label>Release Date</label>
                <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />

            </div>

            <h2> </h2>

            <button className="button" onClick={() => save(title, author, releaseDate)}> + Add</button>

            


            <h2 className="booklist">A list of books</h2>

            <table style={{ width: 900, marginTop: 25, marginLeft: 200 }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Release Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {books.map((item) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.releaseDate}</td>
                            <td>
                                <button onClick={() => loadDateEdit(item.id)}>Edit</button>
                                <button onClick={() => deleteItem(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FormAdmin;
