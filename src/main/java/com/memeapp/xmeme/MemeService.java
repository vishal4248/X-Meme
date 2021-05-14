package com.memeapp.xmeme;

import com.memeapp.xmeme.models.Meme;
import com.memeapp.xmeme.models.MemeRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class MemeService {

    @Autowired
    MemeRepository memeRepository;

    public List<Meme> getAllMemes() {
        return memeRepository.getLatestMemes();
    }

    public Optional<Meme> getMeme(int id) {
        return memeRepository.findById(id);
    }

    public void addMeme(MemeRequest memeRequest) {
        Meme meme = new Meme();
        meme.setCaption(memeRequest.getCaption());
        meme.setImgUrl(memeRequest.getImgUrl());

        if(memeRequest.getMadeBy()==null) {
            meme.setMadeBy("x-meme");
        } else {
            meme.setMadeBy(memeRequest.getMadeBy());
        }

        meme.setPostedAt(LocalDate.now());

        memeRepository.save(meme);
    }

    public void delete(int id) {
        memeRepository.deleteById(id);
    }
}
