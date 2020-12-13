## Link to GitHub Pages

This project was uploaded on GitHub Pages as follows: [https://nandoe14.github.io/HARDRIGTH-REACT/](https://nandoe14.github.io/HARDRIGTH-REACT/).

## Created with React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Hooks used

This project works using Hooks from React, Redux, Router and Custom.

#### Implemented hooks list (React, Redux, Router)

| Hook                      | Times used | Components (js)                                       |
|---------------------------|:----------:|-------------------------------------------------------|
| `useState` (React)        | 5          | AppRouter, ContactUs, NavBar, SeeWhere, SeeWhereVideo |
| `useDispatch` (Redux)     | 4          | AppRouter, Footer, GetStartedForm, Login              |
| `useSelector` (Redux)     | 3          | Footer, Login, NavBar                                 |
| `useEffect` (React)       | 3          | AppRouter, SeeWhere, SeeWhereVideo                    |
| `useLayoutEffect` (React) | 1          | NavBar                                                |
| `useLocation` (Router)    | 1          | NavBar                                                |

#### Implemented custom hooks list

| Custom Hook         | Times used | Components (js)                    |
|---------------------|:----------:|------------------------------------|
| `useForm`           | 3          | ContactForm, GetStartedForm, Login |
| `useFormWithFilter` | 1          | SeeWhere                           |
| `useCounter`        | 1          | Slider                             |

These custom hooks have implemented the `useState` React-Hook

#### All used hooks list per component

| Component (js) | Used hooks (React)            | U.h. (React-Redux)           | U.h. (React-Router-Dom) | U.h. (Custom)       |
|----------------|-------------------------------|------------------------------|-------------------------|---------------------|
| AppRouter      | `useState`, `useEffect`       | `useDispatch`                | -                       | `useCounter`        |
| ContactForm    | -                             | -                            | -                       | `useForm`           |
| ContactUs      | `useState`                    | -                            | -                       | -                   |
| Footer         | -                             | `useDispatch`, `useSelector` | -                       | -                   |
| GetStartedForm | -                             | `useDispatch`                | -                       | `useForm`           |
| Login          | -                             | `useDispatch`, `useSelector` | -                       | `useForm`           |
| NavBar         | `useState`, `useLayoutEffect` | `useSelector`                | `useLocation`           | -                   |
| SeeWhere       | `useState`, `useEffect`       | -                            | -                       | `useFormWithFilter` |
| SeeWhereVideo  | `useState`, `useEffect`       | -                            | -                       | -                   |
| Slider         | -                             | -                            | -                       | `useCounter`        |










