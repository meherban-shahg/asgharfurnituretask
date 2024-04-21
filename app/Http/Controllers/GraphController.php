<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class GraphController extends Controller
{
    public function index(){
       
        return Inertia::render('Graph/Index');

    }

    public function GraphResult(Request $request)
    {
        if($request->method() == "GET") {
            return Inertia::render('Graph/Index');
        }

        // Validate the request
        Validator::make($request->all(), [
            'host'     => ['required'],
            'database' => ['required'],
            'username' => ['required'],
            'queryData'    => ['required'],
        ])->validate();
    

        // Set up the dynamic database connection
        Config::set('database.connections.dynamic', [
            'driver'   => 'mysql',
            'host'     => $request->host,
            'database' => $request->database,
            'username' => $request->username,
            'password' => $request->password,
            'charset'  => 'utf8mb4',
            'collation'=> 'utf8mb4_unicode_ci',
            'prefix'   => '',
        ]);
        Config::set('database.default', 'dynamic');
    
        // Check if the specified database exists by attempting to select from a table within it
        try {
            // This query will throw an exception if the specified database does not exist
            DB::connection('dynamic')->select('SELECT 1 FROM DUAL');
        } catch (\Exception $e) {
            // Handle the case where the specified database does not exist
            return Inertia::render('Graph/Index', ['error' => 'The specified database does not exist.']);
        }
    
    
        // Execute the dynamic query to fetch sales data
        $dataSet = DB::connection('dynamic')->select($request->queryData);
    
        // Return the table data along with the error message (if any)
        return Inertia::render('Graph/Index', ['dataSet' => $dataSet]);
    }
    


}
