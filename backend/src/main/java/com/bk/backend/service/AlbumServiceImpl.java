package com.bk.backend.service;

import com.bk.backend.domain.Album;
import com.bk.backend.dto.AlbumDTO;
import com.bk.backend.repository.AlbumRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AlbumServiceImpl implements AlbumService{

    private final AlbumRepository repository;
    private final ModelMapper mapper;

    @Override
    public List<AlbumDTO> getList() {

        return repository.findAll().stream().map(entity -> mapper.map(entity, AlbumDTO.class)).toList();
    }

    @Override
    public AlbumDTO getOne(Long id) {

        Optional<Album> optionalAlbum = repository.findById(id);

        AlbumDTO dto = null;

        if(optionalAlbum.isPresent()) {
            Album entity = optionalAlbum.get();
            dto = mapper.map(entity, AlbumDTO.class);
        } else {
            dto = new AlbumDTO();
        }
        return dto;
    }

    @Override
    public void addOne(AlbumDTO dto) {
        Album entity = mapper.map(dto, Album.class);
        repository.save(entity);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
