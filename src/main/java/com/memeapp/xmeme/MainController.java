package com.memeapp.xmeme;

import com.memeapp.xmeme.models.Meme;
import com.memeapp.xmeme.models.MemeRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    MemeService memeService;

    @GetMapping("/memes")
    public List<Meme> getAllMemes() {
        return memeService.getAllMemes();
    }

    @PostMapping("/memes")
    public void addMeme(@RequestBody MemeRequest memeRequest) {
        memeService.addMeme(memeRequest);
    }

    @GetMapping("/memes/{id}")
    public Meme getMeme(@PathVariable("id") int id) {
        Optional<Meme> optionalMeme = memeService.getMeme(id);
        return optionalMeme.orElse(null);
    }

    @DeleteMapping("/memes/{id}")
    public void deleteMeme(@PathVariable("id") int id) {
        memeService.delete(id);
    }


}
