## REQUIREMENTS

- PHP 8.1
- Laravel   Framework 10.48.8
- ReactJS   18.2.0
- NodeJS    18.16.0
- NPM       9.5.1

## DESCRIPTION

In this code challenge task, you are required to create a dynamic data visualization application using Laravel for the backend and React.js for the frontend. The goal of the application is to dynamically fetch data from a MySQL database, visualize it using a line chart, and display it to the front user.


### Frontend (React.js):
    1-Form Component:
        The frontend includes a form component where users can input parameters such as MySQL host, database name, username, password, and query data.
        Upon form submission, the data is sent to the Laravel backend for processing.

    2-Line Chart Visualization:
        Upon receiving data from the backend, the frontend visualizes it using a line chart component from the Recharts library.
        The line chart is responsive and occupies the full width of the container.

### Setup Instructions:
    1-Backend Setup:
        Ensure that Laravel and Composer are installed on your system.
        Clone the repository and navigate to the project directory.
        Run composer install to install project dependencies.
        Configure your .env file with database connection details.
        Run php artisan migrate to create the required student_results table.
        Start the Laravel development server using php artisan serve.
        npm install recharts.


    2-Frontend Setup:
        Ensure that Node.js and npm are installed on your system.
        Navigate to the resources/js directory.
        Run npm install to install frontend dependencies.
        Start the React.js development server using npm run dev.

    3-Accessing the Application:
        Open your web browser and navigate to http://localhost:8000 to access the application.


### Project Structure:
    1-app/Http/Controllers/GraphController.php: Contains the backend logic for fetching data and rendering views.
    2-resources/js/components/Graph.jsx: Contains the frontend logic for rendering the form and visualizing data.

### Technologies Used:
    Backend: Laravel, MySQL
    Frontend: React.js, Recharts
    Other Tools: Composer, npm

### Demo Query:
    
    Demo database attached to the project root named "asf_db1.sql".
    
    SELECT MONTH(SaleDate) AS SaleMonth, 
       COUNT(SaleID) AS TotalSalesCount, 
       SUM(Quantity) AS TotalQuantitySold, 
       AVG(Quantity) AS AverageQuantityPerSale 
    FROM sales 
    WHERE YEAR(SaleDate) = YEAR(CURRENT_DATE - INTERVAL 1 YEAR) 
    GROUP BY MONTH(SaleDate) 
    ORDER BY MONTH(SaleDate);
    

Author:
Meherban Shah


## HOW TO SETUP

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
