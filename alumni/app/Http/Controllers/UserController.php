<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;


class UserController extends Controller {

    public function GetUsers()
    {
        return User::all();
    }
    public function EditUser(Request $request, $id)
    {
        $user= User::findOrFail($id);
        $user->name = $request->name;
        $user->firstname = $request->firstname;
        $user->email = $request->email;
        $user->promo = $request->promo;
        $user->specialisation= $request->specialisation;
        $user->techno= $request->techno;
        $user->emploi_actuel= $request->emploi_actuel;
        $user->dmin= $request->dmin;
        $user->challenge1_id= $request->challenge1_id;
        $user->challenge2_id= $request->challenge2_id;
        $user->challenge3_id= $request->challenge3_id;
        $user->save();
    }
}
