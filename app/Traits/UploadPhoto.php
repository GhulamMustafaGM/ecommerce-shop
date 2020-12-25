<?php 

namespace App\Traits;

trait uploadphoto {
    public function uploadphoto($request, $path) {
        $file=$request;
        $fileName=time().'_'.$file->getClientOriginalName();
        $filePath=$path;
        $file->move($filePath,$fileName);
        return $fileName;
    }
}