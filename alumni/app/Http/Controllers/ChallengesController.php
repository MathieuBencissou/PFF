<?php

namespace App\Http\Controllers;

use App\Models\Challenges;
use Illuminate\Http\Request;

class ChallengesController extends Controller
{
    public function AddChallenge(Request $request)
    {
        //création obbjet challenge
        $request->validate([
            'titre' => ['required'],
            'details' => ['required'],
            'contact' => ['required'],
            'date_limite' => ['required'],
            'technos' => ['required'],
            'user_id' => ['required'],
        ]);

        Challenges::create([
            'titre' => $request->titre,
            'details' => $request->details,
            'contact' => $request->contact,
            'date_limite' => $request->date_limite,
            'nb_inscrits' => 1,
            'technos' => $request->technos,
            'user_id' => $request->user_id
        ]);
    }
    public function GetChallenges()
    {
        return Challenges::all();
    }
    public function DeleteChallenge($id)
    {
        $Chal= Challenges::findOrFail($id);
        $Chal->delete();
    }
    public function EditChallenge(Request $request, $id)
    {
        $Chal= Challenges::findOrFail($id);
        $Chal->titre = $request->titre;
        $Chal->details = $request->details;
        $Chal->contact = $request->contact;
        $Chal->date_limite = $request->date_limite;
        $Chal->technos= $request->technos;
        $Chal->user_id = $request->user_id;
        $Chal->save();
    }
    public function AddPlayer(Request $request, $id)
    {
        $Chal= Challenges::findOrFail($id);
        $Chal->nb_inscrits = ($Chal->nb_inscrits)+1;
        $Chal->save();
    }
}
