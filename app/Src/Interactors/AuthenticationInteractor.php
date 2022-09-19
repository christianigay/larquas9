<?php
namespace App\Src\Interactors;

use App\Src\Repositories\RepositoryInterface;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthenticationInteractor {

    public function __construct(RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function login($request)
    {
        if(Auth::attempt($request->all())){
            return Auth::user();
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}