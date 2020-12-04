<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    public function AddProject(Request $request)
    {
        $request->validate([
            'titre' => ['required'],
            'description' => ['required'],
            'langage' => ['required'],
            'pseudo' => ['required'],
        ]);

    Partner::create([
        'titre' => $request->titre,
        'description' => $request->description,
        'langage' => $request->langage,
        'pseudo' => $request->pseudo,
    ]);
    }

    public function GetProject() 
    {
        return Partner::all();
    }

    public function DeleteProject($id)
    {
        $Proj = Partner::findOrFail($id);
        $Proj -> delete();
    }
    public function EditProject(Request $request, $id)
    {
        $Chal= Partner::findOrFail($id);
        $Chal->titre = $request->titre;
        $Chal->description = $request->description;
        $Chal->langage = $request->langage;
        $Chal->pseudo = $request->pseudo;
        // $Chal->user_id = $request->user_id;
        $Chal->save();
    }
}
