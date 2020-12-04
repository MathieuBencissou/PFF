<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function AddProject(Request $request)
    {
        //création obbjet Project
        $request->validate([
            'titre' => ['required'],
            'details' => ['required'],
            'langage' => ['required'],
        ]);

        Project::create([
            'titre' => $request->titre,
            'details' => $request->details,
            'langage' => $request->langage,
        ]);
    }
    public function GetProjects()
    {
        return Project::all();
    }
    public function DeleteProject($id)
    {
        $Project= Project::find($id);
        $Project->delete();
    }
}
