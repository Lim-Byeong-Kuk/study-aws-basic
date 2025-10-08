package com.bk.backend.service;

import com.bk.backend.dto.AlbumDTO;

import java.util.List;

public interface AlbumService {

    List<AlbumDTO> getList();
    AlbumDTO getOne(Long id);
    void addOne(AlbumDTO dto);
    void delete(Long id);
}
