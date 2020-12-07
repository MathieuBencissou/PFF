<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', "min:8", 'confirmed']
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
    }
    public function EditPlayer(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->challenge1_id = $request->challenge1_id;
        $user->challenge2_id = $request->challenge2_id;
        $user->challenge3_id = $request->challenge3_id;
        $user->save();
    }
}
