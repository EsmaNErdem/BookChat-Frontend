# Book Chat App - Frontend

## Introduction

Welcome to the frontend documentation of the Book Chat App. This React app is designed to provide frontend functionality for the Book Chat Backend. Below, you'll find detailed information about the architecture, features, and technologies used in the development of this frontend.

## Key Features

- **Backend API Integration:** Utilize Axios to load data from the backend seamlessly, providing a smooth user experience.

- **Debounce Form Submission:** Implement debouncing for book and review filter forms to enhance user experience and prevent unnecessary API calls.

```javascript
    useEffect(() => {
      if (timerId.current) {
        clearTimeout(timerId.current);
        timerId.current = null
      }
      
      timerId.current = setTimeout(() => {
        sendFilterData()
      }, 1500);

      return () => {
        if (timerId.current) {
          clearTimeout(timerId.current);
          timerId.current = null
        }
      };
    }, [filterData]);    
```
- **Form Validation:** Utilize Formik for form validation, guiding users through the login and signup processes and ensuring data integrity.

```JSX
   <Formik
         initialValues={{ username: '', password: ''}}
         validationSchema={Yup.object({
            username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Username Required'),
            password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Password Required'),
         })}
         onSubmit={handleSubmit} 
         >
         <Form className='FormContainer'>
   ...
```

- **Infinite Scrolling:** Implement infinite scrolling to provide users with a seamless data browsing experience, allowing them to explore a vast library of books effortlessly.

- **Reusability with Custom Hooks:** Enhance code reusability by implementing custom hooks for book liking, review liking, adding reviews, and user following. This modular approach ensures flexibility and maintainability.

```javascript
const useReviewLike = (reviewId, reviewLikeCount) => {   
    console.debug("useReviewLike"); 
  
    const { hasLikedReview, likeReview } = useContext(UserContext);
    const [liked, setLiked] = useState();
    const [likes, setLikes] = useState(reviewLikeCount);
    const [error, setError] = useState(null);
    ...
}
```
- **Testing and Error Handling:** Thoroughly test each component and functionality to ensure a bug-free user experience. Implement robust error handling mechanisms to gracefully handle unexpected situations.

# To Install Dependencies

1. Clone the Project: Navigate to the directory where you want to clone the project and run:

```
git clone https://github.com/EsmaNErdem/BookChat-Frontend
```

2. Install Dependencies: Install the project dependencies using npm:

```
npm install
```

3. Run Tests: To run the tests and ensure everything is working correctly:

```
npm test
```

## Tech Stack

- React: The frontend is built using the React library for building user interfaces.

- Axios: Utilize Axios for making HTTP requests to the backend API.

- Formik: Implement Formik for form validation and to guide users through the login and signup processes.

- Infinite Scrolling: Implement infinite scrolling for seamless data browsing.

- Custom Hooks: Utilize custom hooks for book liking, review liking, adding reviews, and user following to enhance reusability.
